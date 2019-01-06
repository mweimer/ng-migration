import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector:    'md-session-display',
  templateUrl: './session-display.component.html',
  styleUrls: ['./session-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionDisplayComponent {

    @Input() session: any;

    @Output() selectionUpdated = new EventEmitter<any>();

    constructor() {}

    sessionClicked() {
        this.selectionUpdated.emit(this.session);
    }

}
