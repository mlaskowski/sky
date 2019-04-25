import {Component, OnDestroy, OnInit} from '@angular/core';
import {DetailsService} from './details.service';
import {switchMap, takeUntil} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {Details} from './details';
import {HeaderService} from '../service/header.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent implements OnInit, OnDestroy {
  param$: Subject<void> = new Subject<void>();
  details: Details;

  constructor(private detailsService: DetailsService, private route: ActivatedRoute, private headerService: HeaderService) {
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.getDetails().subscribe((details: Details) => {
      console.log(details);
      this.headerService.setType(details.Type);
      this.setHistory(details);
      this.details = details;
    });
  }

  ngOnDestroy(): void {
    this.param$.next();
    this.param$.complete();
  }

  private getDetails(): Observable<Details> {
    return this.route.params.pipe(
      takeUntil(this.param$),
      switchMap((params) => {
        return this.detailsService.getDetails(params['id']);
      })
    );
  }

  private setHistory(details: Details): void {
    this.detailsService.setToLocalStorage(details);
  }
}

