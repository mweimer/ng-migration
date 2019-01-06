import {BrowserModule} from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {UIRouterModule} from "@uirouter/angular";

import {CoreModule} from './core/core.module';
import {HomeModule} from './home/home.module';
import {SessionModule} from './session/session.module';
import {SpeakerModule} from './speaker/speaker.module';

import {environment} from '../environments/environment';
import {states} from './app.states';
import {AppRootComponent} from './core/app-root/app-root.component';

@NgModule({
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({ states}),
    CoreModule,
    HomeModule,
    SessionModule,
    SpeakerModule
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule {}
