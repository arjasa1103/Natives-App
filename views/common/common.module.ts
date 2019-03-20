import {NgModule} from '@angular/core';
import {ItemCardComponent} from '@views/common/components/item.card';
import {FooterComponent} from '@views/common/components/footer.component';
import {HOME_ROUTING} from '@views/home/home.route';
import {CommonModule} from '@angular/common';
import {MatCardModule, MatDialogModule} from '@angular/material';
import {NavbarComponent} from '@views/common/components/navbar.component';
import {DialogComponent} from '@views/common/components/dialog.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormViewModule} from '@views/form/form.module';

const COMPONENTS = [
    ItemCardComponent,
    FooterComponent,
    NavbarComponent,
    DialogComponent
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
        HOME_ROUTING,
        CommonModule,
        MatCardModule,
        MatDialogModule,
        FormViewModule
    ],
    exports: [
        ...COMPONENTS,
        ...CONTAINERS,
        ...PAGES,
        MatCardModule,
    ]
})
export class CommonViewModule {}

