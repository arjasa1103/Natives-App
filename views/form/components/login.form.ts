import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'login-form',
    templateUrl: './login.form.html',
    styleUrls: ['form.form.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginForm implements OnInit{

    @Output() public toggleView: EventEmitter<number>;
    public form: FormGroup;

    public constructor() {
        this.toggleView = new EventEmitter<number>();
    }

    public gotoSignup() {
        this.toggleView.emit(1);
    }

    public submitForm(){
        if (this.form) {

        }
    }

    public ngOnInit(){
        this.form = new FormGroup({
            username_email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    }
}
