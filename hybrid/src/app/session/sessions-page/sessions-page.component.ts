import {Component, OnInit, Inject, ChangeDetectionStrategy} from '@angular/core';
import {SESSION_SERVICE} from '../session-service/session.service.provider';
import { from, Observable } from 'rxjs';


@Component({
  selector:    'md-sessions-page',
  templateUrl: './sessions-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionsPageComponent implements OnInit {

    sessions: Observable<any[]>;

    constructor(@Inject(SESSION_SERVICE) private sessionService: any) {}

    ngOnInit() {
       this.sessions = from(this.sessionService.getSessions());
    }

    selectionMade(session) {
        console.log('selection updated', session);
    }
}
