/**
 * Import of Angular's modules
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Import of application's modules
 */
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { LayoutModule } from './layout/layout.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [

    TableComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    HeaderModule,
    FooterModule,
    SidebarModule
  ],
  exports: [
    LayoutModule,
    HeaderModule,
    FooterModule,
    SidebarModule,
    TableComponent
  ]
})

export class ComponentsModule {
}
