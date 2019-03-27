import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'native-item-card',
    templateUrl: './item.card.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemCardComponent {
    @Input() public itemImg: string;
    @Input() public brandName: string;
    @Input() public itemName: string;
    @Input() public itemPrice: number;
    @Input() public itemID: string;
};
