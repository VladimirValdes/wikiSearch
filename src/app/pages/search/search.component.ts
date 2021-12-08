import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
