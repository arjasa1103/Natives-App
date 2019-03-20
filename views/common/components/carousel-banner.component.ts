import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component, ContentChildren,
    Directive, ElementRef, Input, QueryList, ViewChild, ViewChildren,
} from '@angular/core';
import {BannerItemDirective} from '@views/common/components/banner-item.directive';
import {animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style} from '@angular/animations';

@Directive({selector:'banner-item'})
export class BannerItemElement{}


@Component({
    selector:'native-carousel-banner',
    templateUrl:'carousel-banner.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['carousel-banner.component.scss'],
})
export class CarouselBannerComponent implements AfterViewInit{
    @ContentChildren(BannerItemDirective) items : QueryList<BannerItemDirective>;
    @ViewChildren(BannerItemElement, { read: ElementRef }) private itemsElements : QueryList<ElementRef>;
    @ViewChild('carouselBanner') private carousel : ElementRef;
    @Input() timing = '250ms ease-in';
    @Input() showControls = true;
    private player : AnimationPlayer;
    private itemWidth : number;
    private currentSlide = 0;
    carouselWrapperStyle = {}

    ngAfterViewInit() {
        // For some reason only here I need to add setTimeout, in my local env it's working without this.
        setTimeout(() => {
            console.log(this.itemsElements);
            this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
            this.carouselWrapperStyle = {
                width: `${this.itemWidth}px`
            }
        });

    }

    next() {
        console.log(this.currentSlide);
        if( this.currentSlide + 1 === this.items.length ) return;
        this.currentSlide = (this.currentSlide + 1) % this.items.length;
        const offset = 100;
        const myAnimation : AnimationFactory = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
    }

    private buildAnimation( offset ) {
        return this.builder.build([
            animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
        ]);
    }

    prev() {
        console.log(this.currentSlide);

        if( this.currentSlide === 0 ) return;

        this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
        const offset = 100;

        const myAnimation : AnimationFactory = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
    }

    constructor( private builder : AnimationBuilder ) {
    }
}
