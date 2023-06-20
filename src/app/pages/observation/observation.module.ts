import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ObservationComponent} from "./observation.component";
import {ObservationListComponent} from "./observation-list/observation-list.component";
import {ObservationRoutingModule} from "./observation-routing.module";
import {ComponentsModule} from "../../shared/components/components.module";
import { ObservationItemComponent } from './observation-item/observation-item.component';
import { ObservationNewComponent } from './observation-new/observation-new.component';
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatSelect, MatSelectModule} from "@angular/material/select";
import {MatOption, MatOptionModule} from "@angular/material/core";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ObservationComponent,
    ObservationListComponent,
    ObservationItemComponent,
    ObservationNewComponent
  ],
  imports: [
    CommonModule,
    ObservationRoutingModule,
    ComponentsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule
  ]
})
export class ObservationModule { }
