import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector:'native-items-page',
    templateUrl:'items.page.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsPage{
    public DialogState: number;

    public showDialog(param) {
        this.DialogState = param;
    }

    public constructor() {
        this.DialogState = 0;
    }
}
