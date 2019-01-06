import SessionsPageComponent from './sessions-page/sessions-page.component';
import SessionDisplayComponent from './session-display/session-display.component';
import SessionService from './session-service/session.service';
import ShowSessionDetailsDirective from './show-session-details/show-session-details.directive';

const sessionModule = angular.module('migrate-demo.session', [])
    .component('mdSessionsPage', SessionsPageComponent)
    .component('mdSessionDisplay', SessionDisplayComponent)
    .service('sessionService', SessionService)
    .directive('mdShowSessionDetails', ShowSessionDetailsDirective);

export default sessionModule;

