import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'jasasistem-todo-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="name">
      <input type="submit">
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoForm {
  @Input() public form: FormGroup;
  @Output() public submitted: EventEmitter<any>;

  public constructor() {
    this.submitted = new EventEmitter<any>();
  }

  public onSubmit() {
    this.submitted.emit(this.form);
    this.form.reset();
  }
}
