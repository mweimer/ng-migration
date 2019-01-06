import {InjectionToken} from '@angular/core';
import {CommonModule} from '@angular/common';

export let SESSION_SERVICE = new InjectionToken<any>('sessionService');
export function sessionServiceFactory($injector: any) {
    return $injector.get('sessionService');
}
export const sessionServiceProvider = {
    provide: SESSION_SERVICE,
    useFactory: sessionServiceFactory,
    deps: ['$injector']
};
