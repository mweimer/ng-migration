import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {UIRouterUpgradeModule} from '@uirouter/angular-hybrid';
import {UpgradeModule} from '@angular/upgrade/static';

import {CoreModule} from './core/core.module';
import {SessionModule} from './session/session.module';
import {SpeakerModule} from './speaker/speaker.module';

import {environment} from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    UIRouterUpgradeModule,
    CoreModule,
    SessionModule,
    SpeakerModule
  ],
  providers: []
})
export class AppModule {

    constructor(private upgrade: UpgradeModule) {}

    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, ['migrate-demo'], {strictDi: environment.production});
    }
}
