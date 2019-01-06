import {Component, OnInit, Inject, ChangeDetectionStrategy} from '@angular/core';
import { Observable } from 'rxjs';
import {SpeakerService} from '../speaker-service/speaker.service';

@Component({
  selector:    'md-speakers-page',
  templateUrl: './speakers-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakersPageComponent implements OnInit {

    speakers: Observable<any[]>;

    constructor(private speakerService: SpeakerService) {}

    ngOnInit() {
       this.speakers = this.speakerService.getSpeakers();
    }
}
