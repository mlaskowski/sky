import {Component, Input, OnInit} from '@angular/core';
import {Details} from '../../details/details';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  private _details: Details;
  seasons: number[] = [];
  @Input()
  set details(details: Details) {
    this._details = details;
    this.seasons = [];
    if (this.details.totalSeasons) {
      this.setSeasons(this.details.totalSeasons);
    }
  }
  get details(): Details {
    return this._details;
  }
  constructor() { }

  ngOnInit() {}

  private setSeasons(totalSeasons: number): void {
    for (let i = 1; i <= totalSeasons; i++) {
      this.seasons.push(i);
    }
  }
}
