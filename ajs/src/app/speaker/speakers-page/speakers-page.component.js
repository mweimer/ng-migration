function controller(speakerService) {
    'ngInject';
    
    this.$onInit = () => {
        speakerService.getSpeakers().then(speakers => {
            this.speakers = speakers;
        });
    };
    
}

export default {
    template: require('./speakers-page.component.html'),
    controller
};
