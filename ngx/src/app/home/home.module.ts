import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomePageComponent} from './home-page/home-page.component';


@NgModule({
  imports: [
      CommonModule,
  ],
  declarations: [
      HomePageComponent
  ],
  exports: [
  ],
  entryComponents: [
      HomePageComponent
  ],
  providers: [
  ]
})
export class HomeModule { }
