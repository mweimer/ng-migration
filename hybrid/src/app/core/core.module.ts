import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {HighlightNamePipe} from './highlight-name/highlight-name.pipe';
import {LoggerInterceptor} from './logger/logger.interceptor';

@NgModule({
  imports: [
      CommonModule,
  ],
  declarations: [
      HighlightNamePipe
  ],
  exports: [
      HighlightNamePipe
  ],
  entryComponents: [

  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true }
  ]
})
export class CoreModule { }
