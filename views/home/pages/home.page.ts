import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'native-home-page',
  templateUrl: 'home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  private items = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
  ];
}

