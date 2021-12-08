import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor( private readonly http: HttpClient) { }

  // 
  // action=query&format=json&list=search&continue=-%7C%7C&srsearch=Craig%20Noone&sroffset=10

  search( term: string ): Observable<any> {

    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch: term,
      utf8: '1',
      origin: '*'
    }

    return this.http.get< any >(environment.api, { params })
  }
}
