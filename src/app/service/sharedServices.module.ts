import {HttpClientModule} from '@angular/common/http';
import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {LocationService} from './location.service';
import {HeaderService} from "./header.service";

@NgModule({
  imports: [HttpClientModule],
  providers: [],
  declarations: []
})
export class SharedServicesModule {
  constructor(@Optional() @SkipSelf() parentModule: SharedServicesModule) {
    if (parentModule) {
      throw new Error(
        'SharedServiceModule is already loaded. Import it in AppModule only'
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedServicesModule,
      providers: [
        {provide: 'Window', useValue: window},
        LocationService,
        HeaderService
      ]
    };
  }
}
