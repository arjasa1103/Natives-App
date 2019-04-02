import {ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AuthService} from "../../../../src/services/api/auth.service";
import {tap} from "rxjs/operators";

@Component({
    selector: 'navbar-component',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NavbarComponent implements OnInit{

    // An angular way to replace .getElementByID / .getElementByClassName
    @ViewChild('navbarLogo') navbarLogo: ElementRef;
    @ViewChild('navbarList') navbarList: ElementRef;
    @ViewChild('loginRegister') loginRegister: ElementRef;

    // Output for parent component
    @Output() public toggleDialog: EventEmitter<number>;

    // Input from parent component
    @Input() public loginState: boolean;

    public DialogState: number;
    public LoginState: boolean;
    public currentUser: any;

    ngOnInit(): void {
        this.LoginState = false;
        this.getUser();
    }

    public constructor(
        private authService: AuthService
    ) {
        this.toggleDialog = new EventEmitter<number>();
        this.DialogState = 0;
    }

    // Function to open navigation list
    public toggleNavbar(): void {
        if (this.navbarLogo.nativeElement.src === 'http://localhost:4200/assets/images/squared-menu-filled.png') {
            this.navbarLogo.nativeElement.src = 'http://localhost:4200/assets/images/squared-menu.png';
        } else if (this.navbarLogo.nativeElement.src === 'http://localhost:4200/assets/images/squared-menu.png'){
            this.navbarLogo.nativeElement.src = 'http://localhost:4200/assets/images/squared-menu-filled.png';
        }
        this.navbarList.nativeElement.classList.toggle('navbar-show');
    }

    // Function to open options to Login or Register
    public openLoginRegister(): void {
        if (this.loginRegister.nativeElement.classList.contains('width:50')) {
            this.loginRegister.nativeElement.classList.remove('width:50');
            this.loginRegister.nativeElement.classList.add('width:250');
        }
    }

    // Function to close options to Login or Register
    public closeLoginRegister(): void {
        if (this.loginRegister.nativeElement.classList.contains('width:250')) {
            this.loginRegister.nativeElement.classList.remove('width:250');
            this.loginRegister.nativeElement.classList.add('width:50');
        }
    }

    // Function to change Dialog State resulting in opening of Dialog component
    public showDialog(param) {
        this.DialogState = param;
    }

    // Function to change Log in state, may result calling of getUser() function
    public changeState(param) {
        if (param) {
            this.getUser();
        } else {
            this.LoginState = param;
        }
    }

    // Function to use me() from AuthService to get current user data and change put it to variable
    getUser() {
        this.authService.me().pipe(
            tap(result => {
                this.LoginState = true;
                this.currentUser = result;
                console.log('test');
            }),
        ).subscribe();
    }

    // Function to use logout() from AuthService and change LoginState
    public logout() {
        this.authService.logout().subscribe(res => {
            localStorage.removeItem('token');
            this.LoginState = false;
        });
    }
}
