import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector:    'md-app-root',
  templateUrl: './app-root.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppRootComponent {

    constructor() {}

}
