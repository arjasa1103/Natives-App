import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'register-form',
    templateUrl: './register.form.html',
    styleUrls: ['form.form.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RegisterForm implements OnInit{

    @Output() public toggleView: EventEmitter<number>;
    public form: FormGroup;

    public constructor() {
        this.toggleView = new EventEmitter<number>();
    }

    public gotoSignin() {
        this.toggleView.emit(2);
    }

    public submitForm() {
        if (this.form){

        }
    }

    public ngOnInit() {
        this.form = new FormGroup({
            username: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
            reenter_password: new FormControl('', [Validators.required])
        });
    }
}
