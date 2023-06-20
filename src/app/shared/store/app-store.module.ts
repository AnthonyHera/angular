import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {observationFormReducer} from "./reducer/observation-form.reducer";
import {ObservationFormEffect} from "./effects/observation-form.effect";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      observationForm : observationFormReducer
    }),
    EffectsModule.forRoot([
      ObservationFormEffect
    ]
    )
  ]
})
export class AppStoreModule { }
