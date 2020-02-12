import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleComponent } from './components/article/article.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { MiscellaneousModule } from 'src/app/miscellaneous/miscellaneous.module';



@NgModule({
  declarations: [
    ArticlesComponent,
    ArticlesListComponent,
    ArticleComponent,
    CommentsListComponent,
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    MiscellaneousModule,
  ]
})
export class ArticlesModule { }
