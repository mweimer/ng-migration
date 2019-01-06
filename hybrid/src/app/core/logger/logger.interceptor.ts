import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';

import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(tap((response: HttpResponse<any>) => {
                if (response.url) {
                    console.log('Response received from: ' +  response.url);
                }
            }));
    }
}
