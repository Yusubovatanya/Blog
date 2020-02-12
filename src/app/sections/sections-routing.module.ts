import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionsComponent } from './sections/sections.component';
import { NotFoundComponent } from '../miscellaneous/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: SectionsComponent,
    children: [
      {
        path: 'main',
        loadChildren: () => import('./../main/main.module').then(m => m.MainModule),
      },
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
