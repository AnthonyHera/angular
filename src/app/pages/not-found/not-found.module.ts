/**
 * Import of Angular's modules
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/**
 * Import of ngx-translate module
 */
import { TranslateModule } from '@ngx-translate/core';
/**
 * Import of application's components
 */
import { NotFoundComponent } from './not-found.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    NotFoundComponent,
  ]
})
export class NotFoundModule {
}
