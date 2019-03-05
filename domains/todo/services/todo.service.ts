import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class TodoService {
  private _todo: BehaviorSubject<Array<string>>;

  public constructor() {
    this._todo = new BehaviorSubject<Array<string>>([]);
  }

  public get todo(): Array<string> {
    return this._todo.value;
  }

  public get todo$(): Observable<Array<string>> {
    return this._todo.asObservable();
  }

  public set todo(value: Array<string>) {
    this._todo.next(value);
  }

  public addTodo(name: string) {
    this._todo.next([ ...this._todo.value, name ]);
  }
}
