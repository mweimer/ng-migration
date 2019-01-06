import 'angular';
import 'angular-mocks'


import appModule from './app/app.module';


const testsContext = require.context(".", true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);


