import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../../../src/services/api/auth.service";
import {mapToData} from "../../../../src/services/mapping/data.map";
import {tap} from "rxjs/operators";

@Component({
    selector: 'login-form',
    templateUrl: './login.form.html',
    styleUrls: ['../form.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginForm implements OnInit{

    @Output() public toggleView: EventEmitter<number>;
    public form: FormGroup;

    public constructor(
        private fb: FormBuilder,
        private authService: AuthService
    ) {
        this.toggleView = new EventEmitter<number>();
    }

    public gotoSignup() {
        this.toggleView.emit(1);
    }

    public submitForm(){
        this.authService.login(this.form.getRawValue())
        .pipe(
            tap(result => {
                // @ts-ignore
                localStorage.setItem('token', result.access_token);
            }),
        ).subscribe();
    }

    public ngOnInit(){
        this.form = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required])
        });
    }
}
