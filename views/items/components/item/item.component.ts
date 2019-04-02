import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemsService} from '@views/items/container/items.service';
import {Item} from '@views/items/container/item.object';

@Component({
    selector:'item-component',
    templateUrl:'item.component.html',
    styleUrls: ['item.component.scss']
})
export class ItemComponent implements OnInit{
    private itemID: string;
    item: Item;

    //Initiate the router to get from api service
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private itemsService: ItemsService,
    ){}

    //onInit get the item ID and get all the data
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.itemID = params['id']
        })
        console.log(this.itemID);
        //get the Item Data from the API service and put it into an object that will be used in the html file
        this.itemsService.getItem(this.itemID)
            .subscribe((resp: Item) => {
                this.item = resp[0];
                console.log(this.item);
            });
    }
}
