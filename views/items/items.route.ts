import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ItemsPage} from '@views/items/pages/items.page';
import {ItemListComponent} from '@views/items/components/item-list/item-list.component';

const routes: Routes = [
    {
        path:'',
        component:ItemsPage,
        children: [
            {
                path: '',
                redirectTo: 'category/all/1'
            },
            {
                path: 'category/:cat/:page',
                component: ItemListComponent,
            },
            {
                path: '**',
                redirectTo: 'page/1',
            }
        ]
    },
];

export const ITEMS_ROUTING: ModuleWithProviders = RouterModule.forChild(routes);
