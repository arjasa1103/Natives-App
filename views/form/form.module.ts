import {NgModule} from '@angular/core';
import {HOME_ROUTING} from '@views/home/home.route';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginForm} from "@views/form/components/login-form/login.form";
import {RegisterForm} from "@views/form/components/register-form/register.form";
import {ServiceModule} from "../../src/services/service.module";

const COMPONENTS = [
    LoginForm,
    RegisterForm,
];

const CONTAINERS = [

];

const PAGES = [
];


@NgModule({
    declarations: [
        ...COMPONENTS,
        ...CONTAINERS,
        ...PAGES,
    ],
    imports: [
        // HOME_ROUTING,
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        ...COMPONENTS,
        ...CONTAINERS,
        ...PAGES,
    ]
})
export class FormViewModule {}
