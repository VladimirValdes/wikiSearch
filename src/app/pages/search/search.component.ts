import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';
import { WikiService } from './services/wiki.service';

@Component({
  selector: 'app-search',
  template:`
    <div class="form">
      <form
        [formGroup]="searchForm"
        (ngSubmit)="search()"
        autocomplete="off">
        <div class="form-field">
           <input
              type="search"
              placeholder="Search..."
              formControlName="search">
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;

  // inputSearch  = new FormControl('');
  @Output() submitted = new EventEmitter<string>();

  constructor( private fb: FormBuilder ) { 
    
  }

  ngOnInit(): void {
    
    this.searchForm = this.fb.group({
      search: [],
    });

   this.search();

  //  this.onChange();
  }

  onChange() {
    // // this.inputSearch.valueChanges
    //     .pipe(
    //           map( ( search: string ) => search.trim() ),
    //           debounceTime(350),
    //           distinctUntilChanged(),
    //           filter( ( search: string ) => search !== ''),
    //           tap( res => this.submitted.emit(res)))
    //     .subscribe()
  }

  search(  ) {
    this.searchForm.controls['search'].valueChanges
        .pipe(
          map(( search: string ) => search.trim() ),
          debounceTime(350),
          distinctUntilChanged(),
          filter( ( search: string ) => search !== ''),
          tap( res => this.submitted.emit(res))).subscribe();      
    // console.log( term );
    // this.submitted.emit(res)
    
  }

}
