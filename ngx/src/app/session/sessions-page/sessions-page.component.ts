import {Component, OnInit, Inject, ChangeDetectionStrategy} from '@angular/core';
import { Observable } from 'rxjs';
import {SessionService} from '../session-service/session.service';

@Component({
  selector:    'md-sessions-page',
  templateUrl: './sessions-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionsPageComponent implements OnInit {

    sessions: Observable<any[]>;

    constructor(private sessionService: SessionService) {}

    ngOnInit() {
       this.sessions = this.sessionService.getSessions();
    }

    selectionMade(session) {
        console.log('selection updated', session);
    }
}
