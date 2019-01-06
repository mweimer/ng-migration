import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {CoreModule} from '../core/core.module';

import {SpeakerService} from './speaker-service/speaker.service';
import {SpeakersPageComponent} from './speakers-page/speakers-page.component';
import {SpeakerDisplayComponent} from './speaker-display/speaker-display.component';

@NgModule({
  imports: [
      CommonModule,
      HttpClientModule,
      CoreModule
  ],
  declarations: [
      SpeakerDisplayComponent,
      SpeakersPageComponent
  ],
  exports: [],
  entryComponents: [
      SpeakersPageComponent
  ],
  providers: [
      SpeakerService
  ]
})
export class SpeakerModule { }
