import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FilterPipeModule} from 'ngx-filter-pipe';
import {SearchComponent} from './search/search.component';
import {RouterModule} from '@angular/router';
import {StarsComponent} from './star/stars.component';
import {CardComponent} from './card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FilterPipeModule,
    RouterModule
  ],
  declarations: [SearchComponent, StarsComponent, CardComponent],
  exports: [SearchComponent, StarsComponent, CardComponent]
})
export class ComponentModule {
  // static forRoot() {
  //   return {
  //     ngModule: ComponentModule,
  //     providers: [HeaderService],
  //   };
  // }
}
