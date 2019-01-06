import SessionDisplayComponent from './session-display/session-display.component';
import SessionService from './session-service/session.service';

const sessionModule = angular.module('migrate-demo.session', [])
    .component('mdSessionDisplay', SessionDisplayComponent)
    .service('sessionService', SessionService);
    
export default sessionModule;

