import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomePage} from './pages/home.page';
import {AboutPage} from './pages/about.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'about',
    component: AboutPage,
  },
];

export const TODO_ROUTING: ModuleWithProviders = RouterModule.forChild(routes);
