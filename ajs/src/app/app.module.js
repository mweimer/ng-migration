import uiRouter from '@uirouter/angularjs';
import * as sanitize from 'angular-sanitize';

import coreModule from './core/core.module';
import homeModule from './home/home.module';
import sessionModule from './session/session.module';
import speakerModule from './speaker/speaker.module';
import states from './app.states';


const appModule = angular.module('migrate-demo', [
    sanitize,
    uiRouter,
    coreModule.name,
    homeModule.name,
    sessionModule.name,
    speakerModule.name
]);


appModule.config(function($locationProvider, $httpProvider) {
    'ngInject';

    $httpProvider.interceptors.push('loggerInterceptor');

    $locationProvider.html5Mode(true);
})

states(appModule);

export default appModule;