import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { WikiService } from './services/wiki.service';

@Component({
  selector: 'app-search',
  template:`
    <div class="form">
      <form>
        <div class="form-field">
            <input type="search" placeholder="Search...">
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private readonly wikiService: WikiService) { }

  ngOnInit(): void {
    this.wikiService.search('angular')
                    .pipe(
                      tap( res => console.log( res ))
                    ).subscribe();
  }

}
