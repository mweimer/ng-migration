function controller(sessionService) {
    'ngInject';
    
    
    this.$onInit = () => {
        sessionService.getSessions().then(sessions => {
            this.sessions = sessions;
        });
    };

    this.selectionMade = (session) => {
        console.log('selection updated', session);
    }

}

export default {
    template: require('./sessions-page.component.html'),
    controller
};
