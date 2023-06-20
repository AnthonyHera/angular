import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  /**
   * @description Constructor of HeaderComponent component
   *
   * The constructor creates an instance of the HeaderComponent component and specifies the default values
   * the input and output variables of the component.
   *
   * @param router Angular Router enables navigation from one view to the next as users perform application tasks
   */
  constructor(private router: Router) {
  }

  /**
   * @description The method uses the Angular router and allows you to navigate the application's routes
   *
   * @param path Path to navigate to
   */
  public navigate(path: string): Promise<boolean> {
    return this.router.navigate([path]);
  }
}
