import {Injectable} from '@angular/core';
import {MenuLink} from '../model/menuLink';

@Injectable()
export class LocationService {
  menuLinks: MenuLink[] = [
    {path: '', label: 'home'},
    {path: 'filmy', label: 'filmy'},
    {path: 'seriale', label: 'seriale'}];
  constructor(){}
  getMenuLinks(): MenuLink[] {
    return this.menuLinks;
  }
}
