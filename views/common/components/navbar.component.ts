import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'navbar-component',
    templateUrl: './navbar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NavbarComponent {

    @ViewChild('navbarLogo') navbarLogo: ElementRef;
    @ViewChild('navbarList') navbarList: ElementRef;
    @ViewChild('loginRegister') loginRegister: ElementRef;

    public toggleNavbar(): void {
        if (this.navbarLogo.nativeElement.src === 'http://localhost:4200/assets/images/squared-menu-filled.png') {
            this.navbarLogo.nativeElement.src = 'http://localhost:4200/assets/images/squared-menu.png';
        } else if (this.navbarLogo.nativeElement.src === 'http://localhost:4200/assets/images/squared-menu.png'){
            this.navbarLogo.nativeElement.src = 'http://localhost:4200/assets/images/squared-menu-filled.png';
        }
        this.navbarList.nativeElement.classList.toggle('navbar-show');
    }

    public openLoginRegister(): void {
        if (this.loginRegister.nativeElement.classList.contains('width:50')) {
            this.loginRegister.nativeElement.classList.remove('width:50');
            this.loginRegister.nativeElement.classList.add('width:250');
        }
    }

    public closeLoginRegister(): void {
        if (this.loginRegister.nativeElement.classList.contains('width:250')) {
            this.loginRegister.nativeElement.classList.remove('width:250');
            this.loginRegister.nativeElement.classList.add('width:50');
        }
    }
}
