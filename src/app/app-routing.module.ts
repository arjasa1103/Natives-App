import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: '@views/home/home.module#HomeViewModule'
  },
  {
    path:'items',
    loadChildren: '@views/items/items.module#ItemsViewModule'
  },
  {
    path:'**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
