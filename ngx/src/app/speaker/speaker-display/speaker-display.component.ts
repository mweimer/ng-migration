import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector:    'md-speaker-display',
  templateUrl: './speaker-display.component.html',
  styleUrls: ['./speaker-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerDisplayComponent {

    @Input() speakerData: any;

    constructor() {}
}
