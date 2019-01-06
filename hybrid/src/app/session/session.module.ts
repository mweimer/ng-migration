import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SessionsPageComponent} from './sessions-page/sessions-page.component';
import {SessionDisplayWrapper} from './session-display/session-display.wrapper';
import {ShowSessionDetailsDirective} from './show-session-details/show-session-details.directive';
import {sessionServiceProvider} from './session-service/session.service.provider';

@NgModule({
  imports: [
      CommonModule
  ],
  declarations: [
      SessionsPageComponent,
      ShowSessionDetailsDirective,
      SessionDisplayWrapper
  ],
  exports: [
      SessionsPageComponent
  ],
  entryComponents: [
      SessionsPageComponent
  ],
  providers: [
      sessionServiceProvider
  ]
})
export class SessionModule { }
