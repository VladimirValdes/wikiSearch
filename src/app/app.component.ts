import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Article } from './interfaces/wiki.interface';
import { WikiService } from './pages/search/services/wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wikiSearch';

  articles$ !:Observable<Article[]>;
  
  constructor( private readonly wikiService: WikiService) {
    
  }

  onSearch( term: string ) {
    this.articles$ = this.wikiService.search( term );
  }
}
