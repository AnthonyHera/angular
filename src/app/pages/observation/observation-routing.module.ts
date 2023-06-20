import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "../pages.component";
import {NotFoundComponent} from "../not-found/not-found.component";
import {ObservationComponent} from "./observation.component";
import {ObservationListComponent} from "./observation-list/observation-list.component";
import {ObservationItemComponent} from "./observation-item/observation-item.component";

const routes: Routes = [

  {
  path: '',
  component: ObservationComponent,
  children:[

    {
    path:'list',
    component: ObservationListComponent
    },
    {
      path:'item/:formulaireId',
      component:ObservationItemComponent
    },
    {path:'',
      redirectTo:'list',pathMatch:'full'
    },
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservationRoutingModule { }
