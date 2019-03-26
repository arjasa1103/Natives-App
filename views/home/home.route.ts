import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomePage} from '@views/home/pages/home.page';

const routes: Routes = [
  {
    path:'',
    component: HomePage
  },
  {
    path:'items',
    loadChildren: '@views/items/items.module#ItemsViewModule'
  }
];

export const HOME_ROUTING: ModuleWithProviders = RouterModule.forChild(routes);
