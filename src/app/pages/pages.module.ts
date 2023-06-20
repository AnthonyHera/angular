/**
 * Import of Angular's modules
 */
import { NgModule } from '@angular/core';
/**
 * Import of application's modules
 */
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../shared/components/components.module';
import { NotFoundModule } from './not-found/not-found.module';
/**
 * Import of application's components
 */
import { PagesComponent } from './pages.component';
import { ObservationComponent } from './observation/observation.component';
import { ObservationListComponent } from './observation/observation-list/observation-list.component';
import {ObservationModule} from "./observation/observation.module";
import { AnimalComponent } from './animal/animal.component';
import {AnimalModule} from "./animal/animal.module";

@NgModule({
  imports: [
    PagesRoutingModule,
    ComponentsModule,
    NotFoundModule,
    ObservationModule,
    AnimalModule
  ],
  declarations: [
    PagesComponent,
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule {
}
