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
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AppStoreModule} from "./shared/store/app-store.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {createTranslateLoader} from "./shared/services/translate";


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
    AppStoreModule,
    TranslateModule.forRoot({
      defaultLanguage : 'fr_FR',
      loader :{
        provide:TranslateLoader,
        useFactory:(createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [AppComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}





