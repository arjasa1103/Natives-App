import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {NguCarouselConfig} from '@ngu/carousel';

@Component({
    selector:'banner-carousel',
    templateUrl:'banner-carousel.component.html',
    styleUrls: ['banner-carousel.component.scss'],
    // animations: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerCarouselComponent implements OnInit{

    @Input() bannerItems: Array<any> = [1, 2, 3, 4, 5];
    public carouselTileConfig: NguCarouselConfig = {
        grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
        speed: 250,
        point: {
            visible: true
        },
        touch: true,
        loop: true,
        interval: { timing: 10000 },
        animation: 'lazy'
    };

    ngOnInit(): void {

    }

}
