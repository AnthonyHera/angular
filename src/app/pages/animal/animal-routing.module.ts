import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AnimalComponent} from "./animal.component";
import {AnimalFamilyComponent} from "./animal-family/animal-family.component";
import {AnimalTypeComponent} from "./animal-type/animal-type.component";

const routes: Routes = [

  {
    path: '',
    component: AnimalComponent,
    children:[
      {
        path:'type',
        component: AnimalTypeComponent
      },
      {
        path:'family',
        component:AnimalFamilyComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalRoutingModule { }
