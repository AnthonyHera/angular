import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalTypeComponent } from './animal-type/animal-type.component';
import { AnimalFamilyComponent } from './animal-family/animal-family.component';
import {ObservationRoutingModule} from "../observation/observation-routing.module";
import {ComponentsModule} from "../../shared/components/components.module";
import {AnimalRoutingModule} from "./animal-routing.module";
import {RouterModule} from "@angular/router";
import {AnimalComponent} from "./animal.component";



@NgModule({
  declarations: [
    AnimalComponent,
    AnimalTypeComponent,
    AnimalFamilyComponent
  ],
  imports: [
    CommonModule,
    AnimalRoutingModule,
    ComponentsModule
  ]
})
export class AnimalModule { }
