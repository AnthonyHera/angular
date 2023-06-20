/**
 * Import of Angular's modules
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
/**
 * Import of application's modules
 */
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './shared/components/components.module';
/**
 * Import of application's components
 */
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AppStoreModule} from "./shared/store/app-store.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    AppStoreModule
  ],
  bootstrap: [AppComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}





