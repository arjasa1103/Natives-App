import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TODO_ROUTING} from './todo.routes';
import {HomePage} from './pages/home.page';
import {AboutPage} from './pages/about.page';
import {MenuComponent} from './components/menu.component';
import {TodoDomainModule} from '../../domains/todo/todo.module';
import {TodoContainer} from './containers/todo.container';
import {ReactiveFormsModule} from '@angular/forms';
import {TodoForm} from './components/forms/todo.form';
import {TodoComponent} from './components/todo.component';

const COMPONENTS = [
  MenuComponent,
  TodoForm,
  TodoComponent,
];

const CONTAINERS = [
  TodoContainer,
];

const PAGES = [
  HomePage,
  AboutPage,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...CONTAINERS,
    ...PAGES,
  ],
  imports: [
    TODO_ROUTING,
    CommonModule,
    TodoDomainModule,
    ReactiveFormsModule,
  ],
})
export class TodoViewModule {}
