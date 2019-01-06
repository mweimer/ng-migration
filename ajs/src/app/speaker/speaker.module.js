import SpeakersPageComponent from './speakers-page/speakers-page.component';
import SpeakerService from './speaker-service/speaker.service';
import SpeakerDisplayComponent from './speaker-display/speaker-display.component';

const speakerModule = angular.module('migrate-demo.speaker', [])
    .component('mdSpeakersPage', SpeakersPageComponent)
    .component('mdSpeakerDisplay', SpeakerDisplayComponent)
    .service('speakerService', SpeakerService);

export default speakerModule;

