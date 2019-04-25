import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {Details} from '../details/details';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  history: Details[];

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.history = this.getHistory();
  }

  private getHistory(): Details[] {
    return this.homeService.getAllFromLocalStorage().reverse();
  }
}

