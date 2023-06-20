import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ObservationComponent} from "./observation.component";
import {ObservationListComponent} from "./observation-list/observation-list.component";
import {ObservationRoutingModule} from "./observation-routing.module";
import {TableComponent} from "../../shared/components/table/table.component";
import {ComponentsModule} from "../../shared/components/components.module";
import { ObservationItemComponent } from './observation-item/observation-item.component';



@NgModule({
  declarations: [
    ObservationComponent,
    ObservationListComponent,
    ObservationItemComponent
  ],
  imports: [
    CommonModule,
    ObservationRoutingModule,
    ComponentsModule
  ]
})
export class ObservationModule { }
