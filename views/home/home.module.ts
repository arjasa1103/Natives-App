import {NgModule} from '@angular/core';
import {HOME_ROUTING} from '@views/home/home.route';
import {CommonModule} from '@angular/common';
import {HomePage} from '@views/home/pages/home.page';
import {CommonViewModule} from '@views/common/common.module';
import {CategoryCardComponent} from '@views/home/components/category.card';
import {BrandInspirationComponent} from '@views/home/components/brand-inspiration/brand-inspiration.component';
import {NguCarouselModule} from '@ngu/carousel';
import {BannerCarouselComponent} from '@views/home/components/home-banner/banner-carousel.component';
import {ItemCarouselComponent} from "@views/home/components/item-carousel/item-carousel.component";
import {FormViewModule} from '@views/form/form.module';

const COMPONENTS = [
  CategoryCardComponent,
  BrandInspirationComponent,
  BannerCarouselComponent,
  ItemCarouselComponent
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
    CommonViewModule,
    NguCarouselModule,
    CommonViewModule,
    FormViewModule
  ],
})
export class HomeViewModule {}
