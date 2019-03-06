import {NgModule} from '@angular/core';
import {HOME_ROUTING} from '@views/home/home.route';
import {CommonModule} from '@angular/common';
import {HomePage} from '@views/home/pages/home.page';

const COMPONENTS = [

];

const CONTAINERS = [

];

const PAGES = [
  HomePage
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...CONTAINERS,
    ...PAGES,
  ],
  imports: [
    HOME_ROUTING,
    CommonModule,
  ],
})
export class HomeViewModule {}
