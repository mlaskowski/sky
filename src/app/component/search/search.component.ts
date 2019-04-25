import {Component, Input} from '@angular/core';
import {Subject} from 'rxjs';
import {SearchService} from './search.service';
import {SearchObject} from './search';
import {Config} from '../../model/config';
import {config} from '../../app-config.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [SearchService]
})
export class SearchComponent {
  @Input() type;

  results: SearchObject;
  resultsVisible = false;
  searchTerm$ = new Subject<string>();
  get config(): Config {
    return config;
  }
  constructor(private searchService: SearchService, private router: Router) {
    this.searchService.search(this.searchTerm$)
      .subscribe((results: SearchObject)  => {
        this.results = results;
      });
  }
  focusFunction(): void {
    this.resultsVisible = true;
  }
  focusOutFunction(): void {
    this.resultsVisible = false;
  }
  redirect(id: string) {
    this.router.navigate(['title', id]);
  }
}
