import {Component, Input} from '@angular/core';

@Component({
    selector: 'native-brand-inspiration',
    templateUrl: 'brand-inspiration.component.html',
    styleUrls: ['brand-inspiration.component.scss']
})
export class BrandInspirationComponent {
    @Input() public brandImg1 : string;
}
