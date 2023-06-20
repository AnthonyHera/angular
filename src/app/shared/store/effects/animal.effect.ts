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
export class AnimalEffect {
  animalTypeGetAll: Observable<SimpleAction> = createEffect(() => this.action.pipe(
    ofType<SimpleAction> ('[Animal Type] Get All'),
    switchMap( ()=>
      this.apiService.searchAllType().pipe(
        map(value => new SimpleAction('[Animal Type] Get All success', value)),
        catchError(err =>of(new SimpleAction('[Animal Type] Get All failed',err)))
      )
    )));

  animalFamilyGetAll: Observable<SimpleAction> = createEffect(() => this.action.pipe(
    ofType<SimpleAction> ('[Animal Family] Get All'),
    switchMap( ()=>
      this.apiService.searchAllFamily().pipe(
        map(value => new SimpleAction('[Animal Family] Get All success', value)),
        catchError(err =>of(new SimpleAction('[Animal Family] Get All failed',err)))
      )
    )));
  constructor(private action: Actions,private store :Store <AppState> ,private apiService: ApiService) { }
}
