import {Directive, ElementRef, OnInit, Input} from '@angular/core';

@Directive({
    selector: '[mdShowSessionDetails]',
})
export class ShowSessionDetailsDirective implements OnInit {

    @Input() mdShowSessionDetails: any;

    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
        const session = this.mdShowSessionDetails;

        this.elementRef.nativeElement.addEventListener('dblclick', () => {
            alert(session.description);
        });
    }
}
