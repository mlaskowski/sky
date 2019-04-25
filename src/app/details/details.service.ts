import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {config} from '../app-config.service';
import {Observable} from 'rxjs';
import {Details} from './details';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  baseUrl: string = config.BACKEND_URL;
  queryUrl = '?apikey=' + config.BACKEND_KEY + '&i=';
  constructor(private http: HttpClient) { }

  getDetails(id: string): Observable<Details> {
    return this.http.get<Details>(this.baseUrl + this.queryUrl + id);
  }
  setToLocalStorage(details: Details) {
     localStorage.setItem(localStorage.length.toString(), JSON.stringify(details));
  }
// Create item:
//   let myObj = { name: 'Skip', breed: 'Labrador' };
//   localStorage.setItem(key, JSON.stringify(myObj));
//
// // Read item:
//   let item = JSON.parse(localStorage.getItem(key));
//   getCurrentMovies() {
//     return this.http.get(this.baseUrl + this.queryUrl);
//   }

}
