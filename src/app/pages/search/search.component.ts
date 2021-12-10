import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';
import { WikiService } from './services/wiki.service';

@Component({
  selector: 'app-search',
  template:`
    <div class="form">
      <form>
        <div class="form-field">
            <input type="search" [formControl]="inputSearch" placeholder="Search...">
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputSearch  = new FormControl('');
  @Output() submitted = new EventEmitter<string>();

  constructor(private readonly wikiService: WikiService) { 
    
  }

  ngOnInit(): void {
   this.onChange();
  }

  onChange() {
    this.inputSearch.valueChanges
        .pipe(
              map( ( search: string ) => search.trim() ),
              debounceTime(350),
              distinctUntilChanged(),
              filter( ( search: string ) => search !== ''),
              tap( res => this.submitted.emit(res)))
        .subscribe()
  }

}
