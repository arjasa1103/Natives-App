import {Component, OnInit} from '@angular/core';
import {Item} from '@views/items/container/item.object';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemsService} from '@views/items/container/items.service';
import {Type} from '@views/items/container/type.object';
import {TypesService} from '@views/items/container/types.service';
import {Category} from '@views/items/container/category.object';
import {CategoriesService} from '@views/items/container/categories.service';

@Component({
    selector: 'item-list',
    templateUrl: 'item-list.component.html'
})
export class ItemListComponent implements OnInit{
    items: Item[];
    categories: Category[];
    public p: number;
    private activeCategory: any;
    displayCategory: string;

    //Constructor to get from the API
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private itemsService: ItemsService,
        private typesService: TypesService,
        private categoriesService: CategoriesService,
        ){
        //Get all item categories from categories API
        this.categoriesService.getCategories()
            .subscribe((resp: Category[]) => {
                this.categories= resp;
            });
    }

    ngOnInit() {
        //Check the router parameter and set the active category
        this.route.params.subscribe( params => {
            this.p = params['page'];
            this.activeCategory = params['cat'];
        });

        //Check the active category from the router and set the items to match the category
        if (this.activeCategory != "all"){
            this.setItems(this.activeCategory);
        } else {
            this.getAllItems();
            this.displayCategory = "All Items";
        }
    }

    //Get All items from items API
    getAllItems(){
        this.itemsService.getItems()
            .subscribe((resp: Item[]) => {
                this.items= resp;
            });
        this.activeCategory ="all";
        this.displayCategory ="All Items";
    }


    //function on page change
    paginate(page: number){
        //set the router to match the current page and scroll to the top window
        this.router.navigate(['items/category/', this.activeCategory, page]);
        window.scrollTo(0, 0);
        this.p = page;
    }

    //Set items shown from the category
    setItems(id: string){
        this.typesService.getType(id)
            .subscribe((resp: Type) => {
                this.displayCategory = resp[0].name;
                this.activeCategory = resp[0].id;
                this.items = resp[0].items;
            });
        window.scrollTo(0, 0);
    }
}
