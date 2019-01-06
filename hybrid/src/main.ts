import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {setAngularJSGlobal} from '@angular/upgrade/static';
import { UIRouter, UrlService } from '@uirouter/core';
import * as angular from 'angular';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

import ajsApp from './app/app.module.ajs';
import states from './app/app.states';

states(ajsApp);

if (environment.production) {
    enableProdMode();
}

setAngularJSGlobal(angular);
platformBrowserDynamic().bootstrapModule(AppModule)
    .then(platformRef => {
        // Initialize the Angular Module
        // (get() any UIRouter service from DI to initialize it)
        const urlService: UrlService = platformRef.injector.get(UIRouter).urlService;

        // Instruct UIRouter to listen to URL changes
        urlService.listen();
        urlService.sync();
    })
    .catch(err => console.log(err));
