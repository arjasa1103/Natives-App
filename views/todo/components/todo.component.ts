import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'jasasistem-todo-component',
  template: `
    <ul>
      <li *ngFor="let todo of todos">
        {{ todo }}
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  @Input() public todos: Array<string>;
}
