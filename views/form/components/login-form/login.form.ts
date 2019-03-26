import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../../../src/services/api/auth.service";
import {tap} from "rxjs/operators";

@Component({
    selector: 'login-form',
    templateUrl: './login.form.html',
    styleUrls: ['../form.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginForm implements OnInit{

    @Output() public toggleForm: EventEmitter<number>;
    @Output() public toggleDialog: EventEmitter<boolean>;
    public form: FormGroup;
    public success: boolean;
    public submitted: boolean;

    public constructor(
        private fb: FormBuilder,
        private authService: AuthService
    ) {
        this.toggleForm = new EventEmitter<number>();
        this.toggleDialog = new EventEmitter<boolean>();
        this.success = false;
        this.submitted = false;
    }

    public gotoSignup() {
        this.toggleForm.emit(1);
    }

    public submitForm(){
        this.submitted = true;
        this.success = !(this.form.controls['email'].invalid || this.form.controls['password'].invalid);

        this.authService.login(this.form.getRawValue())
        .pipe(
            tap(result => {
                // @ts-ignore
                localStorage.setItem('token', result.access_token);
                this.toggleDialog.emit(true);

            }),
        ).subscribe();

        if (this.submitted && this.success){
        }
    }

    public ngOnInit(){
        this.form = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        });
    }
}
