import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { AuthorItemComponent } from './components/author-item/author-item.component';
import { AuthorComponent } from './components/author/author.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MiscellaneousModule } from 'src/app/miscellaneous/miscellaneous.module';


@NgModule({
  declarations: [
    AuthorComponent,
    AuthorItemComponent,

  ],
  imports: [
    CommonModule,
    AuthorRoutingModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
    MiscellaneousModule,
  ]
})
export class AuthorModule { }
