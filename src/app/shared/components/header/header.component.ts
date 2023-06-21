import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from "@ngx-translate/core";

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
  constructor(private router: Router,private translate: TranslateService) {
  }

  /**
   * @description The method uses the Angular router and allows you to navigate the application's routes
   *
   * @param path Path to navigate to
   */
  public navigate(path: string): Promise<boolean> {
    return this.router.navigate([path]);
  }
  public changeLanguage(){
    this.translate.store.currentLang = 'fr_FR'

    if(this.translate.store.currentLang == 'fr_FR')
      this.translate.use('en_BR')

   if(this.translate.store.currentLang =='en_BR')
      this.translate.use('fr_FR')

    console.warn(this.translate.store.currentLang)
  }
}
