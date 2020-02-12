import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SectionsComponent } from './sections/sections.component';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { MaterialModule } from '../material/material.module';
import { HeaderModule } from '../header/header.module';
import { MainModule } from '../main/main.module';


@NgModule({
  declarations: [
    SectionsComponent,
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    MiscellaneousModule,
    MaterialModule,
    HeaderModule,
    MainModule,
  ]
})
export class SectionsModule { }
