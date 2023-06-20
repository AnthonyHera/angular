import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>`
})
export class AppComponent {

  /**
   * @description Constructor of AppComponent component
   *
   * The constructor creates an instance of the AppComponent component and specifies the default values of
   * the input and output variables of the component.
   */
  constructor() {
  }
}
