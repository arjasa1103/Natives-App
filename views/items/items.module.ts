import {NgModule} from '@angular/core';
import {ITEMS_ROUTING} from '@views/items/items.route';
import {CommonViewModule} from '@views/common/common.module';
import {CommonModule} from '@angular/common';
import {NguCarouselModule} from '@ngu/carousel';
import {ItemsPage} from '@views/items/pages/items.page';
import {FeaturedBannerComponent} from '@views/items/components/featured-banner/featured-banner.component';
import {ItemListComponent} from '@views/items/components/item-list/item-list.component';
import {NgxPaginationModule} from "ngx-pagination";
import {RouterModule} from '@angular/router';
import {HomeViewModule} from '@views/home/home.module';
import {ItemComponent} from '@views/items/components/item/item.component';

const COMPONENTS = [
    FeaturedBannerComponent,
    ItemListComponent,
    ItemComponent
];

const CONTAINERS = [

];

const PAGES =[
    ItemsPage,
];

@NgModule({
    declarations: [
        ...COMPONENTS,
        ...CONTAINERS,
        ...PAGES,
    ],
    imports: [
        ITEMS_ROUTING,
        CommonModule,
        CommonViewModule,
        NguCarouselModule,
        NgxPaginationModule,
        HomeViewModule,
        RouterModule
    ],
})
export class ItemsViewModule {}
