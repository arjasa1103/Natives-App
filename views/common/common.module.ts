import {NgModule} from '@angular/core';
import {ItemCardComponent} from '@views/common/components/item-card/item.card';
import {FooterComponent} from '@views/common/components/footer.component';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';
import {NavbarComponent} from '@views/common/components/navbar.component';

const COMPONENTS = [
    ItemCardComponent,
    FooterComponent,
    NavbarComponent,
];

const CONTAINERS = [
];

const PAGES = [
];

// @ts-ignore
@NgModule({
    declarations: [
        ...COMPONENTS,
        ...CONTAINERS,
        ...PAGES,
    ],
    imports: [
        CommonModule,
        MatCardModule,
    ],
    exports: [
        ...COMPONENTS,
        ...CONTAINERS,
        ...PAGES,
        MatCardModule,
    ]
})
export class CommonViewModule {}

