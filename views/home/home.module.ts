import {NgModule} from '@angular/core';
import {HOME_ROUTING} from '@views/home/home.route';
import {HomePage} from '@views/home/pages/home.page';
import {CommonViewModule} from '@views/common/common.module';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrandInspirationComponent} from '@views/home/components/brand-inspiration/brand-inspiration.component';

const COMPONENTS = [
    BrandInspirationComponent,
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
    CommonViewModule
  ],
})
export class HomeViewModule {}
