(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _session_session_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session/session.module */ "./src/app/session/session.module.ts");
/* harmony import */ var _speaker_speaker_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./speaker/speaker.module */ "./src/app/speaker/speaker.module.ts");
/* harmony import */ var _app_states__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.states */ "./src/app/app.states.ts");
/* harmony import */ var _core_app_root_app_root_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/app-root/app-root.component */ "./src/app/core/app-root/app-root.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_3__["UIRouterModule"].forRoot({ states: _app_states__WEBPACK_IMPORTED_MODULE_8__["states"] }),
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
                _session_session_module__WEBPACK_IMPORTED_MODULE_6__["SessionModule"],
                _speaker_speaker_module__WEBPACK_IMPORTED_MODULE_7__["SpeakerModule"]
            ],
            providers: [],
            bootstrap: [_core_app_root_app_root_component__WEBPACK_IMPORTED_MODULE_9__["AppRootComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.states.ts":
/*!*******************************!*\
  !*** ./src/app/app.states.ts ***!
  \*******************************/
/*! exports provided: states */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "states", function() { return states; });
/* harmony import */ var _session_sessions_page_sessions_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session/sessions-page/sessions-page.component */ "./src/app/session/sessions-page/sessions-page.component.ts");
/* harmony import */ var _home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home-page/home-page.component */ "./src/app/home/home-page/home-page.component.ts");
/* harmony import */ var _speaker_speakers_page_speakers_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./speaker/speakers-page/speakers-page.component */ "./src/app/speaker/speakers-page/speakers-page.component.ts");



var homeState = {
    name: 'home',
    url: '/',
    views: {
        'content': {
            component: _home_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]
        }
    }
};
var sessionState = {
    name: 'session',
    url: '/sessions',
    views: {
        'content': {
            component: _session_sessions_page_sessions_page_component__WEBPACK_IMPORTED_MODULE_0__["SessionsPageComponent"]
        }
    }
};
var speakerState = {
    name: 'speaker',
    url: '/speakers',
    views: {
        'content': {
            component: _speaker_speakers_page_speakers_page_component__WEBPACK_IMPORTED_MODULE_2__["SpeakersPageComponent"]
        }
    }
};
var states = [homeState, sessionState, speakerState];


/***/ }),

/***/ "./src/app/core/app-root/app-root.component.html":
/*!*******************************************************!*\
  !*** ./src/app/core/app-root/app-root.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div ui-view=\"content\"></div>"

/***/ }),

/***/ "./src/app/core/app-root/app-root.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/app-root/app-root.component.ts ***!
  \*****************************************************/
/*! exports provided: AppRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRootComponent", function() { return AppRootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppRootComponent = /** @class */ (function () {
    function AppRootComponent() {
    }
    AppRootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'md-app-root',
            template: __webpack_require__(/*! ./app-root.component.html */ "./src/app/core/app-root/app-root.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppRootComponent);
    return AppRootComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @uirouter/angular */ "./node_modules/@uirouter/angular/lib/index.js");
/* harmony import */ var _highlight_name_highlight_name_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./highlight-name/highlight-name.pipe */ "./src/app/core/highlight-name/highlight-name.pipe.ts");
/* harmony import */ var _logger_logger_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logger/logger.interceptor */ "./src/app/core/logger/logger.interceptor.ts");
/* harmony import */ var _app_root_app_root_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-root/app-root.component */ "./src/app/core/app-root/app-root.component.ts");








var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _uirouter_angular__WEBPACK_IMPORTED_MODULE_4__["UIRouterModule"]
            ],
            declarations: [
                _app_root_app_root_component__WEBPACK_IMPORTED_MODULE_7__["AppRootComponent"],
                _highlight_name_highlight_name_pipe__WEBPACK_IMPORTED_MODULE_5__["HighlightNamePipe"]
            ],
            exports: [
                _highlight_name_highlight_name_pipe__WEBPACK_IMPORTED_MODULE_5__["HighlightNamePipe"]
            ],
            entryComponents: [
                _app_root_app_root_component__WEBPACK_IMPORTED_MODULE_7__["AppRootComponent"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _logger_logger_interceptor__WEBPACK_IMPORTED_MODULE_6__["LoggerInterceptor"], multi: true }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/highlight-name/highlight-name.pipe.ts":
/*!************************************************************!*\
  !*** ./src/app/core/highlight-name/highlight-name.pipe.ts ***!
  \************************************************************/
/*! exports provided: HighlightNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightNamePipe", function() { return HighlightNamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HighlightNamePipe = /** @class */ (function () {
    function HighlightNamePipe() {
    }
    HighlightNamePipe.prototype.transform = function (name, targetName) {
        if (name === targetName) {
            return '<mark>' + name + '</mark>';
        }
        return name;
    };
    HighlightNamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'mdHighlightName' })
    ], HighlightNamePipe);
    return HighlightNamePipe;
}());



/***/ }),

/***/ "./src/app/core/logger/logger.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/core/logger/logger.interceptor.ts ***!
  \***************************************************/
/*! exports provided: LoggerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerInterceptor", function() { return LoggerInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



var LoggerInterceptor = /** @class */ (function () {
    function LoggerInterceptor() {
    }
    LoggerInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (response) {
            if (response.url) {
                console.log('Response received from: ' + response.url);
            }
        }));
    };
    LoggerInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoggerInterceptor);
    return LoggerInterceptor;
}());



/***/ }),

/***/ "./src/app/home/home-page/home-page.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Angular Migration Demo</h1>\n<div>\n    <ul>\n        <li><a href=\"/sessions\">Sessions</a></li>\n        <li><a href=\"/speakers\">Speakers</a></li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/home/home-page/home-page.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/home-page/home-page.component.ts ***!
  \*******************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'md-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home/home-page/home-page.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home/home-page/home-page.component.ts");




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            declarations: [
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
            ],
            exports: [],
            entryComponents: [
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
            ],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/session/session-display/session-display.component.html":
/*!************************************************************************!*\
  !*** ./src/app/session/session-display/session-display.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"checkbox\" (click)=\"sessionClicked()\"><span>{{session.startsAt | date: 'medium'}} - <span class=\"title\" [innerHtml]=\"session.title | mdHighlightName: 'AngularJS to Angular 6 Migration'\"></span></span>"

/***/ }),

/***/ "./src/app/session/session-display/session-display.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/session/session-display/session-display.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9td2VpbWVyL0RvY3VtZW50cy9HaXRodWIvbmctbWlncmF0aW9uL25neC9zcmMvYXBwL3Nlc3Npb24vc2Vzc2lvbi1kaXNwbGF5L3Nlc3Npb24tZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24vc2Vzc2lvbi1kaXNwbGF5L3Nlc3Npb24tZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/session/session-display/session-display.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/session/session-display/session-display.component.ts ***!
  \**********************************************************************/
/*! exports provided: SessionDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionDisplayComponent", function() { return SessionDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SessionDisplayComponent = /** @class */ (function () {
    function SessionDisplayComponent() {
        this.selectionUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SessionDisplayComponent.prototype.sessionClicked = function () {
        this.selectionUpdated.emit(this.session);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SessionDisplayComponent.prototype, "session", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SessionDisplayComponent.prototype, "selectionUpdated", void 0);
    SessionDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'md-session-display',
            template: __webpack_require__(/*! ./session-display.component.html */ "./src/app/session/session-display/session-display.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./session-display.component.scss */ "./src/app/session/session-display/session-display.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SessionDisplayComponent);
    return SessionDisplayComponent;
}());



/***/ }),

/***/ "./src/app/session/session-service/session.service.ts":
/*!************************************************************!*\
  !*** ./src/app/session/session-service/session.service.ts ***!
  \************************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var SessionService = /** @class */ (function () {
    function SessionService(http) {
        this.http = http;
        // private readonly apiUrl = '/assets/session.json';
        this.apiUrl = 'https://sessionize.com/api/v2/mqm7pgek/view/sessions';
    }
    SessionService.prototype.getSessions = function () {
        return this.http.get(this.apiUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response[0].sessions; }));
    };
    SessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/session/session.module.ts":
/*!*******************************************!*\
  !*** ./src/app/session/session.module.ts ***!
  \*******************************************/
/*! exports provided: SessionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionModule", function() { return SessionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _sessions_page_sessions_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sessions-page/sessions-page.component */ "./src/app/session/sessions-page/sessions-page.component.ts");
/* harmony import */ var _show_session_details_show_session_details_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-session-details/show-session-details.directive */ "./src/app/session/show-session-details/show-session-details.directive.ts");
/* harmony import */ var _session_display_session_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./session-display/session-display.component */ "./src/app/session/session-display/session-display.component.ts");
/* harmony import */ var _session_service_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./session-service/session.service */ "./src/app/session/session-service/session.service.ts");









var SessionModule = /** @class */ (function () {
    function SessionModule() {
    }
    SessionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]
            ],
            declarations: [
                _sessions_page_sessions_page_component__WEBPACK_IMPORTED_MODULE_5__["SessionsPageComponent"],
                _show_session_details_show_session_details_directive__WEBPACK_IMPORTED_MODULE_6__["ShowSessionDetailsDirective"],
                _session_display_session_display_component__WEBPACK_IMPORTED_MODULE_7__["SessionDisplayComponent"]
            ],
            exports: [
                _sessions_page_sessions_page_component__WEBPACK_IMPORTED_MODULE_5__["SessionsPageComponent"]
            ],
            entryComponents: [
                _sessions_page_sessions_page_component__WEBPACK_IMPORTED_MODULE_5__["SessionsPageComponent"]
            ],
            providers: [
                _session_service_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]
            ]
        })
    ], SessionModule);
    return SessionModule;
}());



/***/ }),

/***/ "./src/app/session/sessions-page/sessions-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/session/sessions-page/sessions-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Sessions</h1>\n<ul>\n    <li *ngFor=\"let session of sessions | async\" [mdShowSessionDetails]=\"session\">\n      <md-session-display [session]=\"session\" (selectionUpdated)=\"selectionMade($event)\"></md-session-display>\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/session/sessions-page/sessions-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/session/sessions-page/sessions-page.component.ts ***!
  \******************************************************************/
/*! exports provided: SessionsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsPageComponent", function() { return SessionsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _session_service_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../session-service/session.service */ "./src/app/session/session-service/session.service.ts");



var SessionsPageComponent = /** @class */ (function () {
    function SessionsPageComponent(sessionService) {
        this.sessionService = sessionService;
    }
    SessionsPageComponent.prototype.ngOnInit = function () {
        this.sessions = this.sessionService.getSessions();
    };
    SessionsPageComponent.prototype.selectionMade = function (session) {
        console.log('selection updated', session);
    };
    SessionsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'md-sessions-page',
            template: __webpack_require__(/*! ./sessions-page.component.html */ "./src/app/session/sessions-page/sessions-page.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_session_service_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
    ], SessionsPageComponent);
    return SessionsPageComponent;
}());



/***/ }),

/***/ "./src/app/session/show-session-details/show-session-details.directive.ts":
/*!********************************************************************************!*\
  !*** ./src/app/session/show-session-details/show-session-details.directive.ts ***!
  \********************************************************************************/
/*! exports provided: ShowSessionDetailsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSessionDetailsDirective", function() { return ShowSessionDetailsDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShowSessionDetailsDirective = /** @class */ (function () {
    function ShowSessionDetailsDirective(elementRef) {
        this.elementRef = elementRef;
    }
    ShowSessionDetailsDirective.prototype.ngOnInit = function () {
        var session = this.mdShowSessionDetails;
        this.elementRef.nativeElement.addEventListener('dblclick', function () {
            alert(session.description);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShowSessionDetailsDirective.prototype, "mdShowSessionDetails", void 0);
    ShowSessionDetailsDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[mdShowSessionDetails]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ShowSessionDetailsDirective);
    return ShowSessionDetailsDirective;
}());



/***/ }),

/***/ "./src/app/speaker/speaker-display/speaker-display.component.html":
/*!************************************************************************!*\
  !*** ./src/app/speaker/speaker-display/speaker-display.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <span ng-bind-html=\"speaker.fullName \"></span> -->\n\n<span class=\"speaker-name\" [innerHtml]=\"speakerData.fullName | mdHighlightName: 'Matt Weimer'\"></span>"

/***/ }),

/***/ "./src/app/speaker/speaker-display/speaker-display.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/speaker/speaker-display/speaker-display.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".speaker-name {\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9td2VpbWVyL0RvY3VtZW50cy9HaXRodWIvbmctbWlncmF0aW9uL25neC9zcmMvYXBwL3NwZWFrZXIvc3BlYWtlci1kaXNwbGF5L3NwZWFrZXItZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFpQixFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NwZWFrZXIvc3BlYWtlci1kaXNwbGF5L3NwZWFrZXItZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGVha2VyLW5hbWUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/speaker/speaker-display/speaker-display.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/speaker/speaker-display/speaker-display.component.ts ***!
  \**********************************************************************/
/*! exports provided: SpeakerDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerDisplayComponent", function() { return SpeakerDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpeakerDisplayComponent = /** @class */ (function () {
    function SpeakerDisplayComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpeakerDisplayComponent.prototype, "speakerData", void 0);
    SpeakerDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'md-speaker-display',
            template: __webpack_require__(/*! ./speaker-display.component.html */ "./src/app/speaker/speaker-display/speaker-display.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./speaker-display.component.scss */ "./src/app/speaker/speaker-display/speaker-display.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpeakerDisplayComponent);
    return SpeakerDisplayComponent;
}());



/***/ }),

/***/ "./src/app/speaker/speaker-service/speaker.service.ts":
/*!************************************************************!*\
  !*** ./src/app/speaker/speaker-service/speaker.service.ts ***!
  \************************************************************/
/*! exports provided: SpeakerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerService", function() { return SpeakerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SpeakerService = /** @class */ (function () {
    function SpeakerService(http) {
        this.http = http;
        //private readonly apiUrl = '/assets/speaker.json';
        this.apiUrl = 'https://sessionize.com/api/v2/mqm7pgek/view/speakers';
    }
    SpeakerService.prototype.getSpeakers = function () {
        return this.http.get(this.apiUrl);
    };
    SpeakerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SpeakerService);
    return SpeakerService;
}());



/***/ }),

/***/ "./src/app/speaker/speaker.module.ts":
/*!*******************************************!*\
  !*** ./src/app/speaker/speaker.module.ts ***!
  \*******************************************/
/*! exports provided: SpeakerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakerModule", function() { return SpeakerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _speaker_service_speaker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./speaker-service/speaker.service */ "./src/app/speaker/speaker-service/speaker.service.ts");
/* harmony import */ var _speakers_page_speakers_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./speakers-page/speakers-page.component */ "./src/app/speaker/speakers-page/speakers-page.component.ts");
/* harmony import */ var _speaker_display_speaker_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./speaker-display/speaker-display.component */ "./src/app/speaker/speaker-display/speaker-display.component.ts");








var SpeakerModule = /** @class */ (function () {
    function SpeakerModule() {
    }
    SpeakerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]
            ],
            declarations: [
                _speaker_display_speaker_display_component__WEBPACK_IMPORTED_MODULE_7__["SpeakerDisplayComponent"],
                _speakers_page_speakers_page_component__WEBPACK_IMPORTED_MODULE_6__["SpeakersPageComponent"]
            ],
            exports: [],
            entryComponents: [
                _speakers_page_speakers_page_component__WEBPACK_IMPORTED_MODULE_6__["SpeakersPageComponent"]
            ],
            providers: [
                _speaker_service_speaker_service__WEBPACK_IMPORTED_MODULE_5__["SpeakerService"]
            ]
        })
    ], SpeakerModule);
    return SpeakerModule;
}());



/***/ }),

/***/ "./src/app/speaker/speakers-page/speakers-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/speaker/speakers-page/speakers-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Speakers</h1>\n<div *ngFor=\"let speaker of speakers | async\">\n    <md-speaker-display [speakerData]=\"speaker\"></md-speaker-display>\n</div>"

/***/ }),

/***/ "./src/app/speaker/speakers-page/speakers-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/speaker/speakers-page/speakers-page.component.ts ***!
  \******************************************************************/
/*! exports provided: SpeakersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeakersPageComponent", function() { return SpeakersPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _speaker_service_speaker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../speaker-service/speaker.service */ "./src/app/speaker/speaker-service/speaker.service.ts");



var SpeakersPageComponent = /** @class */ (function () {
    function SpeakersPageComponent(speakerService) {
        this.speakerService = speakerService;
    }
    SpeakersPageComponent.prototype.ngOnInit = function () {
        this.speakers = this.speakerService.getSpeakers();
    };
    SpeakersPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'md-speakers-page',
            template: __webpack_require__(/*! ./speakers-page.component.html */ "./src/app/speaker/speakers-page/speakers-page.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_speaker_service_speaker_service__WEBPACK_IMPORTED_MODULE_2__["SpeakerService"]])
    ], SpeakersPageComponent);
    return SpeakersPageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mweimer/Documents/Github/ng-migration/ngx/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map