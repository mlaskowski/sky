import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {HomeService} from './home.service';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  providers: [
    HomeService
  ],
  declarations: []
})
export class HomeModule { }
