import {NgModule} from '@angular/core';
import {ItemCardComponent} from '@views/common/components/item-card/item.card';
import {FooterComponent} from '@views/common/components/footer/footer.component';
import {CommonModule} from '@angular/common';
import {MatCardModule, MatDialogModule} from '@angular/material';
import {NavbarComponent} from '@views/common/components/navbar/navbar.component';
import {DialogComponent} from '@views/common/components/dialog/dialog.component';
import {FormViewModule} from '@views/form/form.module';
import {RouterModule} from '@angular/router';

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


@NgModule({
    declarations: [
        ...COMPONENTS,
        ...CONTAINERS,
        ...PAGES,
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatDialogModule,
        FormViewModule,
        RouterModule
    ],
    exports: [
        ...COMPONENTS,
        ...CONTAINERS,
        ...PAGES,
        MatCardModule,
    ]
})
export class CommonViewModule {}

