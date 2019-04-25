import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header.component';
import {ComponentModule} from '../component/component.module';
import {RouterModule} from '@angular/router';
// import {headerRoutes} from './header.scss.routing';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
