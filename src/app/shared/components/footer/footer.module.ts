/**
 * Import of Angular's modules
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Import of application's components
 */
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent
  ],
  declarations: [
    FooterComponent
  ]
})
export class FooterModule {
}
