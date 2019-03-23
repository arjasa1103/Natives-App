import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ItemsPage} from '@views/items/pages/items.page';

const routes: Routes = [
    {
        path:'',
        component:ItemsPage
    },
];

export const ITEMS_ROUTING: ModuleWithProviders = RouterModule.forChild(routes);
