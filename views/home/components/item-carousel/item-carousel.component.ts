import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NguCarouselConfig} from "@ngu/carousel";

@Component({
    selector: 'item-carousel',
    templateUrl: 'item-carousel.component.html',
    styleUrls: ['item-carousel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemCarouselComponent {
    Items =[
        {   itemImg:"https://via.placeholder.com/300.png",
            brandName:"Brand Name",
            itemName:"Item Name",
            itemPrice:"IDR 123456"}
    ]

    //Constructor for the items of the carousel
    constructor(){
        const item = {   itemImg:"https://via.placeholder.com/300.png",
            brandName:"Brand Name",
            itemName:"Item Name",
            itemPrice:"IDR 123456"};
        for (var i = 0; i < 5; i++) {
            this.Items.push(item);
        }
        console.log(this.Items);
    }

    //Configuration of carousel
    public carouselItemConfig: NguCarouselConfig = {
        grid: { xs: 1, sm: 3, md: 3, lg: 4, all: 0 },
        speed: 250,
        point: {
            visible: true
        },
        touch: true,
        loop: true,
        interval: { timing: 5000 },
        animation: 'lazy'
    };


}
