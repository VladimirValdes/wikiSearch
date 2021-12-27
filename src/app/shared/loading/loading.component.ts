import { Component, OnInit } from '@angular/core';
import { LoadingServicesService } from 'src/app/services/loading-services.service';

@Component({
  selector: 'app-loading',
  template: `
    <article
      *ngIf="loading"
      class="loading__article">
        <h3 class="loading__title"></h3>
        <p  class="loading__desc"></p>
      </article>
  `,
  styleUrls: [ './loading.component.scss' ]
})
export class LoadingComponent implements OnInit {

  loading!: boolean;

  constructor( private loadingService: LoadingServicesService) {
      this.loadingService.loadingSub.subscribe( ( value ) => {
        this.loading = value;
      })
   }

  ngOnInit(): void {
  }


}
