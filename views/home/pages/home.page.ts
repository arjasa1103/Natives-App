import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'native-home-page',
  templateUrl: 'home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  public DialogState: number;

  public showDialog(param) {
    this.DialogState = param;
  }

  public constructor() {
    this.DialogState = 0;
  }

}

