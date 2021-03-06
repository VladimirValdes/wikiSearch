import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/wiki.interface';

@Component({
  selector: 'app-article',
  template: `
      <article class="article fadeIn"
            (click)="showResult( article.pageid )">
        <h3 class="article__title"> {{ article.title }}</h3>
        <p [innerHTML]="article.snippet" class="article__desc"></p>
      </article>
  `,
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  @Input() article!: Article;


  showResult( pageid: number ) {
    window.open( `https://es.wikipedia.org/?curid=${ pageid }`, "_blank");
  }

}
