import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'navbar-component',
    templateUrl: './navbar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class NavbarComponent {

    @ViewChild('navbarLogo') navbarLogo: ElementRef;
    @ViewChild('navbarList') navbarList: ElementRef;

    public toggleNavbar(): void {
        if (this.navbarLogo.nativeElement.src === 'http://localhost:4200/assets/images/squared-menu-filled.png') {
            this.navbarLogo.nativeElement.src = 'http://localhost:4200/assets/images/squared-menu.png';
        } else if (this.navbarLogo.nativeElement.src === 'http://localhost:4200/assets/images/squared-menu.png'){
            this.navbarLogo.nativeElement.src = 'http://localhost:4200/assets/images/squared-menu-filled.png';
        }
        this.navbarList.nativeElement.classList.toggle('navbar-show');
    }
}
