import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {SearchObject} from './search';
import {config} from '../../app-config.service';

@Injectable()
export class SearchService {
  baseUrl: string = config.BACKEND_URL;
  queryUrl = '?apikey=' + config.BACKEND_KEY + '&s=';

  constructor(private http: HttpClient) { }

  search(terms: Observable<string>): Observable<SearchObject> {
    return terms.pipe(debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.searchEntries(term)));
  }

  searchEntries(term): Observable<SearchObject> {
      return term ? this.http.get<SearchObject>(this.baseUrl + this.queryUrl + term) : of<SearchObject>({});
  }


}
