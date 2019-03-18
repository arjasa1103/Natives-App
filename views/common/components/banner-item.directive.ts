import {Directive, TemplateRef} from '@angular/core';

@Directive({selector: 'carouselItem'})
export class BannerItemDirective {

    constructor(public tpl: TemplateRef<any>){

    };
}
