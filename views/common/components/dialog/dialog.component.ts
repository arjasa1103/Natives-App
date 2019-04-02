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
    styleUrls: ['./dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DialogComponent implements OnInit{

    @Input() public FormState: number;
    @Output() public toggleDialog: EventEmitter<number>;
    @Output() public toggleState: EventEmitter<boolean>;
    @ViewChild('formContainer') formContainer: ElementRef;
    @ViewChild('dialogContainer') dialogContainer: ElementRef;

    // Change the form container's height resulting in animation
    public toggleForm() {
        if (this.FormState === 1) {
            this.formContainer.nativeElement.classList.remove('height:350');
            this.formContainer.nativeElement.classList.add('height:420');
        } else {
            this.formContainer.nativeElement.classList.remove('height:420');
            this.formContainer.nativeElement.classList.add('height:350');
        }

        this.FormState = this.FormState % 2 + 1;
    }

    // Close the dialog by emitting the value 3 to parent component
    public closeDialog() {
        this.toggleDialog.emit(3);
    }

    // Change the login state in parent component by emitting the value true
    public changeState() {
        this.toggleState.emit(true);
    }

    public constructor() {
        this.toggleDialog = new EventEmitter<number>();
        this.toggleState = new EventEmitter<boolean>();
    }

    ngOnInit() {
        if (this.FormState === 1) {
            this.dialogContainer.nativeElement.classList.add('height:420');
        }else {
            this.dialogContainer.nativeElement.classList.add('height:350');
        }
    }
}
