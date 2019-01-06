import LoggerInterceptor from './logger/logger.interceptor.ajs';
import HighlightNameFilter from './highlight-name/highlight-name.filter';

const coreModule = angular.module('migrate-demo.core', [])
     .factory('loggerInterceptor', LoggerInterceptor)
     .filter('mdHighlightName', HighlightNameFilter);

export default coreModule;

