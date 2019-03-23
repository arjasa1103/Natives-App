import {Component, Input} from '@angular/core';

@Component({
    selector: 'item-list',
    templateUrl: 'item-list.component.html',
})
export class ItemListComponent {
    @Input() itemList : any;
    public dummylist = [];

    constructor(){
        const item = {   itemImg:"https://via.placeholder.com/300.png",
            brandName:"Brand Name",
            itemName:"Item Name",
            itemPrice:"IDR 123456"};
        for (var i = 0; i < 60; i++) {
            this.dummylist.push(item);
        }
    }
}
