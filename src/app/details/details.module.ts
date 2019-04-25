import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {detailsRoutes} from './details.routing';
import {DetailsService} from './details.service';
import {DetailsComponent} from './details.component';
import {RouterModule} from '@angular/router';
import {ComponentModule} from '../component/component.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(detailsRoutes),
    ComponentModule,
  ],
  providers: [
    DetailsService
  ],
  declarations: [DetailsComponent],
  exports: [DetailsComponent]
})
export class DetailsModule { }
