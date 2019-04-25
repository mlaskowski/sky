import {Component, Input, OnInit} from '@angular/core';
import {MenuLink} from '../model/menuLink';
import {HeaderService} from '../service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  type: string;
  @Input() links: MenuLink[];
  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.type.subscribe(updatedType => {
      this.type = updatedType;
    });
  }

}
