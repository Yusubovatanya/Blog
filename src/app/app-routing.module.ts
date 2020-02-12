import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'sections',
    loadChildren: () => import('./sections/sections.module').then(m => m.SectionsModule)
  },
  { path: '', redirectTo: 'sections', pathMatch: 'full' },
  { path: '**', redirectTo: 'sections' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
