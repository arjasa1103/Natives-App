import {
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy, OnInit,
    Output,
    ViewChild
} from '@angular/core';

@Component({
    selector: 'dialog-component',
    templateUrl: './dialog.component.html',
    styleUrls: ['dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DialogComponent implements OnInit{

    @Input() public FormState: number;
    @Output() public toggleDialog: EventEmitter<number>;
    @ViewChild('formContainer') formContainer: ElementRef;
    @ViewChild('dialogContainer') dialogContainer: ElementRef;

    public toggleForm() {
        if (this.FormState === 1) {
            this.formContainer.nativeElement.classList.remove('height:350');
            this.formContainer.nativeElement.classList.add('height:500');
        } else {
            this.formContainer.nativeElement.classList.remove('height:500');
            this.formContainer.nativeElement.classList.add('height:350');
        }

        this.FormState = this.FormState % 2 + 1;
    }

    public closeDialog() {
        this.toggleDialog.emit(3);
    }

    public constructor() {
        this.toggleDialog = new EventEmitter<number>();
    }

    ngOnInit() {
        if (this.FormState === 1) {
            this.dialogContainer.nativeElement.classList.add('height:500');
        }else {
            this.dialogContainer.nativeElement.classList.add('height:350');
        }
    }
}
