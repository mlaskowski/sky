import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class HeaderService {
  type = new BehaviorSubject('movie');

  setType(type: string) {
    this.type.next(type);
  }
  constructor() { }
}
