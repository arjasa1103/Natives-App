import {Component, Input} from '@angular/core';

@Component({
    selector: 'item-card',
    templateUrl: './item.card.html',
})
export class ItemCardComponent {
    @Input() public itemImg: string;
    @Input() public brandName: string;
    @Input() public itemName: string;
    @Input() public itemPrice: number;
};
