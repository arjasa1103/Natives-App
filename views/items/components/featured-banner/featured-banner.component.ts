import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NguCarouselConfig} from '@ngu/carousel';

@Component({
    selector:'featured-banner',
    templateUrl:'featured-banner.component.html',
    styleUrls:['featured-banner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedBannerComponent {
    public bannerItems = [1,2,3,4];

    //Carousel configurations
    public carouselTileConfig: NguCarouselConfig = {
        grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
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
