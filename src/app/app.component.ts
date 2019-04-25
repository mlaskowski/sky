import {Component, OnInit} from '@angular/core';
import {LocationService} from "./service/location.service";
import {MenuLink} from "./model/menuLink";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  menuLinks: MenuLink[];

  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.menuLinks = this.locationService.getMenuLinks();
  }
}
