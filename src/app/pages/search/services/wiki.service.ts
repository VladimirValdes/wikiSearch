import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pluck } from 'rxjs';
import { Article, WikipediaResponse } from 'src/app/interfaces/wiki.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor( private readonly http: HttpClient) { }


  search( term: string ): Observable<Article[]> {

    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch: term,
      utf8: '1',
      origin: '*'
    }

    return this.http.get< WikipediaResponse >(environment.api, { params })
                    .pipe(
                     pluck('query', 'search')
                    )
  }
}
