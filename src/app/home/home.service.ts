import { Injectable } from '@angular/core';
import {Details} from '../details/details';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() { }

  getAllFromLocalStorage(): Details[] {
    const history: Details[] = [];
    if (window.localStorage && localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        const value = JSON.parse(localStorage.getItem(i.toString()));
        history.push(value);
      }
    }
    return history;
  }
}
