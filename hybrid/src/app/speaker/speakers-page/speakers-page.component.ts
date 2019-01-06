import {SpeakerService} from '../speaker-service/speaker.service';

function controller(speakerService: SpeakerService) {
    'ngInject';

    this.$onInit = () => {
        speakerService.getSpeakers().toPromise().then(speakers => {
            this.speakers = speakers;
        });
    };

}

export default {
    template: require('./speakers-page.component.html'),
    controller
};
