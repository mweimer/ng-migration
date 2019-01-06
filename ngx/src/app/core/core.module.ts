import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {UIRouterModule} from "@uirouter/angular";

import {HighlightNamePipe} from './highlight-name/highlight-name.pipe';
import {LoggerInterceptor} from './logger/logger.interceptor';
import {AppRootComponent} from './app-root/app-root.component';


@NgModule({
  imports: [
      CommonModule,
      UIRouterModule
  ],
  declarations: [
      AppRootComponent,
      HighlightNamePipe
  ],
  exports: [
      HighlightNamePipe
  ],
  entryComponents: [
      AppRootComponent
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true }
  ]
})
export class CoreModule { }
