import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http';
import {Config} from './model/config';
import {environment} from '../environments/environment';
export let config: Config;
export const updateConfig = (cfg: Config) => {
  config = cfg;
};
@Injectable()
export class AppConfigService {
  private httpClient: HttpClient;
  constructor(handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }
  loadAppConfig() {
    const URL: string = environment.production ? './assets/config.json' : './assets/dev-config.json';
    // Jako że nie mamy tutaj rozgraniczenia na 2 bazy produkcyjną i devową oba configi przechowuja ten sam dostęp do OMDb API
    return this.httpClient.get<Config>(URL).toPromise()
      .then(
        data => {
      updateConfig(data);
    });
  }
}
