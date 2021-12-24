import { Component, OnInit } from '@angular/core';
import { LoadingServicesService } from 'src/app/services/loading-services.service';

@Component({
  selector: 'app-loading',
  template: `
    <p  [hidden]="!loading" class="loading__title">Loading ...</p>
  `,
  styleUrls: [ './loading.component.scss' ]
})
export class LoadingComponent implements OnInit {

  loading!: boolean;

  constructor( private loadingService: LoadingServicesService) {
      this.loadingService.loadingSub.subscribe( ( value ) => {
        this.loading = value;
        console.log( value );
      })
   }

  ngOnInit(): void {
  }

}
