import {NgModule} from '@angular/core';
import {ItemCardComponent} from '@views/common/components/item.card';
import {FooterComponent} from '@views/common/components/footer.component';
import {HOME_ROUTING} from '@views/home/home.route';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';
import {NavbarComponent} from '@views/common/components/navbar.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselBannerComponent} from '@views/common/components/carousel-banner.component';
import {CarouselItemDirective} from '@views/common/containers/carousel.directive';

const COMPONENTS = [
    ItemCardComponent,
    FooterComponent,
    NavbarComponent,
    CarouselBannerComponent
];

const CONTAINERS = [
    CarouselItemDirective,
];

const PAGES = [
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
        MatCardModule,
    ],
    exports: [
        ...COMPONENTS,
        ...CONTAINERS,
        ...PAGES,
        MatCardModule
    ]
})
export class CommonViewModule {}

