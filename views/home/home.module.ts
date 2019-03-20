import {NgModule} from '@angular/core';
import {HOME_ROUTING} from '@views/home/home.route';
import {HomePage} from '@views/home/pages/home.page';
import {CommonViewModule} from '@views/common/common.module';
import {CommonModule} from '@angular/common';
import {BrandInspirationComponent} from '@views/home/components/brand-inspiration/brand-inspiration.component';
import {NguCarouselModule} from '@ngu/carousel';
import {BannerCarouselComponent} from '@views/home/components/home-banner/banner-carousel.component';
import {MatButtonModule} from '@angular/material';

const COMPONENTS = [
    BrandInspirationComponent,
    BannerCarouselComponent,
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
    MatButtonModule
  ],
})
export class HomeViewModule {}
