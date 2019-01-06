function controller() {
    'ngInject';


    this.$onInit = () => {
    };

    this.sessionClicked = () => {
        this.selectionUpdated();
    };
}

export default {
    template: require('./session-display.component.html'),
    controller,
    bindings: {
        session: '<',
        selectionUpdated: '&'
    }
};
