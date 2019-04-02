import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {tap} from "rxjs/operators";
import {AuthService} from "../../../../src/services/api/auth.service";

@Component({
    selector: 'register-form',
    templateUrl: './register.form.html',
    styleUrls: ['../form.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class RegisterForm implements OnInit{

    @Output() public toggleForm: EventEmitter<number>;
    @Output() public toggleDialog: EventEmitter<boolean>;
    public form: FormGroup;
    public success: boolean;
    public submitted: boolean;

    public constructor(
        private authService: AuthService,
        private fb: FormBuilder,
    ) {
        this.toggleForm = new EventEmitter<number>();
        this.toggleDialog = new EventEmitter<boolean>();
        this.success = false;
        this.submitted = false;
    }

    // Emit the value 2 to parent component
    public gotoSignin() {
        this.toggleForm.emit(2);
    }

    // Function to submit form and change submitted or success value to display Validation in HTML
    public submitForm() {
        this.submitted = true;
        this.success = !(this.form.controls['email'].invalid ||
                        this.form.controls['password'].invalid ||
                        this.form.controls['username'].invalid);

        this.authService.register(this.form.getRawValue())
            .pipe(
                tap(result => {
                    // @ts-ignore
                    console.log(result.access_token);
                }),
            ).subscribe();

        if (this.submitted && this.success){
            setTimeout( () => {this.toggleDialog.emit(true);}, 2000 );
        }
    }

    public ngOnInit() {
        this.form = new FormGroup({
            username: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
        });
    }
}
