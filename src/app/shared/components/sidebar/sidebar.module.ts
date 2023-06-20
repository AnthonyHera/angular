/**
 * Import of Angular's modules
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/**
 * Import of ng-bootstrap modules
 */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/**
 * Import of application's components
 */
import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    SidebarComponent
  ],
  declarations: [
    SidebarComponent
  ]
})
export class SidebarModule {
}
