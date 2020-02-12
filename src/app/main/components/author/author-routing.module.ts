import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { AuthorItemComponent } from './components/author-item/author-item.component';
import { NotFoundComponent } from 'src/app/miscellaneous/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: AuthorComponent,
    children: [
      {
        path: ':id',
        component: AuthorItemComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
