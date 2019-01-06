import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {CoreModule} from '../core/core.module';

import {SessionsPageComponent} from './sessions-page/sessions-page.component';
import {ShowSessionDetailsDirective} from './show-session-details/show-session-details.directive';
import {SessionDisplayComponent} from './session-display/session-display.component';
import {SessionService} from './session-service/session.service';

@NgModule({
  imports: [
      CommonModule,
      HttpClientModule,
      CoreModule
  ],
  declarations: [
      SessionsPageComponent,
      ShowSessionDetailsDirective,
      SessionDisplayComponent
  ],
  exports: [
      SessionsPageComponent
  ],
  entryComponents: [
      SessionsPageComponent
  ],
  providers: [
      SessionService
  ]
})
export class SessionModule { }
