import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
    selector: 'footer-component',
    templateUrl: './footer.component.html',
    styleUrls: ['footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FooterComponent {
}
