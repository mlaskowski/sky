import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ComponentModule} from './component/component.module';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppConfigService} from './app-config.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HomeService} from './home/home.service';
import {SharedServicesModule} from './service/sharedServices.module';
import {routing} from './app.routing';
import {HeaderModule} from './header/header.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/');

}

const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
    return appConfig.loadAppConfig();
  };
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FilterPipeModule,
    ComponentModule,
    HeaderModule,
    SharedServicesModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [AppConfigService]
    },
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
