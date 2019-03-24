import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'category-card',
    templateUrl: './category-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryCardComponent {
    @Input() public category: string;
    @Input() public bgcolor: string;
    @Input() public image: string;
};
