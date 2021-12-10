import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { WikiService } from './pages/search/services/wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wikiSearch';

  
  constructor( private readonly wikiService: WikiService) {
    
  }

  onSearch( term: string ) {
    this.wikiService.search( term )
        .pipe( 
            tap( resp => console.log( resp ))
        ).subscribe();
  }
}
