import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ItemsPage} from '@views/items/pages/items.page';
import {ItemListComponent} from '@views/items/components/item-list/item-list.component';
import {ItemComponent} from '@views/items/components/item/item.component';

const routes: Routes = [
    {
        path:'',
        component:ItemsPage,
        children: [
            {
                //if the router params show nothing redirect to path
                path: '',
                redirectTo: 'category/all/1',
            },
            {
                //go to itemlist component if the router shows category/ and check the category and page
                path: 'category/:cat/:page',
                component: ItemListComponent,
            },
            {
                //go to item component if the router shows item/ and the item ID
                path: 'item/:id',
                component: ItemComponent,
            }
        ],
    },

];

export const ITEMS_ROUTING: ModuleWithProviders = RouterModule.forChild(routes);
