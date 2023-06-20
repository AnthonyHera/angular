import { Injectable } from '@angular/core';
import {SimpleAction} from "../../classes/simple-action.class";
import {Actions, createEffect,ofType} from "@ngrx/effects";
import {catchError, Observable, switchMap, of, map} from "rxjs";
import {ApiService} from "../../services/api.service";
import {AppState} from "../states/app.state";
import {Store} from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class ObservationFormEffect {
  observationFormGetAll: Observable<SimpleAction> = createEffect(() => this.action.pipe(
    ofType<SimpleAction> ('[Observation Form] Get All'),
    switchMap( ()=>
      this.apiService.searchAllFormulaire().pipe(
        map(value => new SimpleAction('[Observation Form] Get All success', value)),
        catchError(err =>of(new SimpleAction('[Observation Form] Get All failed',err)))
      )
    )));
  constructor(private action: Actions,private store :Store <AppState> ,private apiService: ApiService) { }
}
