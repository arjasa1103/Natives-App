import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'jasasistem-menu-component',
  template: `
    <ul>
      <li ><a routerLink="/">Home</a></li>
      <li><a routerLink="/about">About</a></li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

}
