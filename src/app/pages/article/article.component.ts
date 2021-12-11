import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/wiki.interface';

@Component({
  selector: 'app-article',
  template: `
      <article class="article">
        <a [href]="'https://es.wikipedia.org/?curid='+ article.pageid" target="_blank">
          {{article.title}}
        </a>
        <p [innerHTML]="article.snippet"></p>
      </article>
  `,
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  @Input() article!: Article;



}
