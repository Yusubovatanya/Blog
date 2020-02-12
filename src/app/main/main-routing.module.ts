import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from '../miscellaneous/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'articles',
        loadChildren: () => import('./../main/components/articles/articles.module').then(m => m.ArticlesModule)
      },
      {
        path: '', redirectTo: 'articles', pathMatch: 'full',
      },
      {
        path: 'author',
        loadChildren: () => import('./../main/components/author/author.module').then(m => m.AuthorModule)
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
export class MainRoutingModule { }
