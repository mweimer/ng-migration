// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';


declare const require: any;

import * as angular from 'angular';
import * as sanitize from 'angular-sanitize';

import 'angular-mocks';

import coreModule from './app/core/core.module.ajs';
import homeModule from './app/home/home.module';
import sessionModule from './app/session/session.module.ajs';
import speakerModule from './app/speaker/speaker.module.ajs';

const appModule = angular.module('migrate-demo', [
    sanitize,
    coreModule.name,
    homeModule.name,
    sessionModule.name,
    speakerModule.name,
    'ngMock'
]);


// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
