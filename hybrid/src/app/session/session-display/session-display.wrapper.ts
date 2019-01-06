import {UpgradeComponent} from '@angular/upgrade/static';
import {Directive, ElementRef, Injector, Input, Output, EventEmitter, OnInit} from '@angular/core';


@Directive({
    selector: 'md-session-display'
})
export class SessionDisplayWrapper extends UpgradeComponent implements OnInit {
    @Input() session: any;
    @Output() selectionUpdated: EventEmitter<any>;

    constructor(elementRef: ElementRef, injector: Injector) {
        super('mdSessionDisplay', elementRef, injector);
    }
}
