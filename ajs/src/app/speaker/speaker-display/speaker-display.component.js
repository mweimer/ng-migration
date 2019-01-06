function controller() {
    'ngInject';
    
    
    this.$onInit = () => {};

}

export default {
    template: require('./speaker-display.component.html'),
    controller,
    bindings: {
        speakerData: '<'
    }
};
