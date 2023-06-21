import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {observationFormReducer} from "./reducer/observation-form.reducer";
import {ObservationFormEffect} from "./effects/observation-form.effect";
import {animalReducer} from "./reducer/animal.reducer";
import {AnimalEffect} from "./effects/animal.effect";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      observationForm : observationFormReducer,
      animal: animalReducer
    }),
    EffectsModule.forRoot([
      ObservationFormEffect,
      AnimalEffect
    ]
    )
  ]
})
export class AppStoreModule { }
