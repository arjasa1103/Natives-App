import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector:'native-items-page',
    templateUrl:'items.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsPage{
    public DialogState: number;

    public constructor() {
        this.DialogState = 0;
    }
}
