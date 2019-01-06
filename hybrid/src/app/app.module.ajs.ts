import * as sanitize from 'angular-sanitize';
import uiRouter from '@uirouter/angularjs';
import { upgradeModule } from '@uirouter/angular-hybrid';

import coreModule from './core/core.module.ajs';
import homeModule from './home/home.module';
import sessionModule from './session/session.module.ajs';
import speakerModule from './speaker/speaker.module.ajs';

const appModule = angular.module('migrate-demo', [
    sanitize,
    uiRouter,
    upgradeModule.name,
    coreModule.name,
    homeModule.name,
    sessionModule.name,
    speakerModule.name
]);

appModule.config(function($locationProvider, $httpProvider, $urlServiceProvider) {
    'ngInject';

    $httpProvider.interceptors.push('loggerInterceptor');

    $locationProvider.html5Mode(true);

    // tell ui-router that it should wait until all bootstrapping is complete before doing the initial URL synchronization.
    $urlServiceProvider.deferIntercept();
});

export default appModule;
