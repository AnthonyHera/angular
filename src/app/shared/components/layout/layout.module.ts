/**
 * Import of Angular's modules
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Import of application's components
 */
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent
  ],
  declarations: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
