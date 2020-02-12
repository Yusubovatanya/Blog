import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { RouterModule } from '@angular/router';
import { CommentItemComponent } from './components/comment-item/comment-item.component';


@NgModule({
  declarations: [
    SnackBarComponent,
    SpinnerComponent,
    ArticleItemComponent,
    CommentItemComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
  ],
  exports: [
    SpinnerComponent,
    ArticleItemComponent,
    CommentItemComponent,
  ],
  entryComponents: [
    SnackBarComponent,
  ]
})
export class SharedModule { }
