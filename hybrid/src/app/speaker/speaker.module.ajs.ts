import {downgradeComponent} from '@angular/upgrade/static';
import {downgradeInjectable} from '@angular/upgrade/static';

import SpeakersPageComponent from './speakers-page/speakers-page.component';
import {SpeakerDisplayComponent} from './speaker-display/speaker-display.component';
import {SpeakerService} from './speaker-service/speaker.service';

const speakerModule = angular.module('migrate-demo.speaker', [])
    .component('mdSpeakersPage', SpeakersPageComponent)
    .directive('mdSpeakerDisplay', downgradeComponent({component: SpeakerDisplayComponent}) as angular.IDirectiveFactory)
    .service('speakerService', downgradeInjectable(SpeakerService));

export default speakerModule;
