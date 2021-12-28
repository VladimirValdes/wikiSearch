import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  template:`
    <div class="form">
      <form
        [formGroup]="searchForm"
        (ngSubmit)="search()"
        autocomplete="off">
        <div class="form-field">
          <img
            class="form-icon"
            src="assets/icons/search.svg"
            alt="search">
           <input
              type="search"
              placeholder="Search..."
              formControlName="search"
              (blur)="resetInput()">
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;

  @Output() submitted = new EventEmitter<string>();

  constructor( private fb: FormBuilder ) { 
    
  }

  ngOnInit(): void {
    
    this.searchForm = this.fb.group({
      search: [],
    });

   this.search();


  }



  search(  ) {
    this.searchForm.controls['search'].valueChanges
        .pipe(
          map(( search: string ) => (search !== null) ? search.trim() : search ),
          debounceTime(350),
          distinctUntilChanged(),
          filter( ( search: string ) => search !== ''),
          tap( res => {
            if ( res !== null) { this.submitted.emit(res); }
          })).subscribe();      
  }

  resetInput() {
      if ( this.searchForm.controls['search'].value ) {
        this.searchForm.controls['search'].reset(); 
      }
  }

}
