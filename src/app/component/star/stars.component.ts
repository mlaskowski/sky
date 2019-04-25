import {Component, Input, OnChanges, OnInit} from '@angular/core';


@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html'
})
export class StarsComponent implements OnInit, OnChanges {
  @Input() rating: number;
  @Input() type: 'movie' | 'series' = 'movie';
  starTable: any[] = ['', '', '', '', '', '', '', '', '', ''];
  numberOfStars: number;

  constructor() {
  }

  ngOnInit() {
    this.numberOfStars = this.rating;
    this.starTable = this.starTable.map((star) => {
      if (this.numberOfStars >= 1) {
        this.numberOfStars--;
        return '../../../assets/img/' + this.type + '/star.png';
      } else if (this.numberOfStars < 1 && this.numberOfStars > 0) {
        this.numberOfStars--;
        return '../../../assets/img/' + this.type + '/star-half.png';
      } else {
        return '../../../assets/img/' + this.type + '/star-transparent.png';
      }
    });
  }
  ngOnChanges() {
    this.ngOnInit();
  }

}
