import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TodoService} from '../../../domains/todo/services/todo.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'jasasistem-todo-container',
  template: `
    <jasasistem-todo-component [todos]="todoList$ | async"></jasasistem-todo-component>
    <jasasistem-todo-form (submitted)="onSubmit($event)"
                          [form]="todoForm"></jasasistem-todo-form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoContainer {
  public todoList$: Observable<Array<string>>;
  public todoForm: FormGroup;

  public constructor(
    private todoService: TodoService,
    private fb: FormBuilder,
  ) {
    this.todoList$ = this.todoService.todo$;
    this.todoForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  public onSubmit(form: FormGroup) {
    if ('VALID' === form.status) {
      this.todoService.addTodo(form.value.name);
    }
  }
}
