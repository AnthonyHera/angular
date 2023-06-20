import {initialState, ObservationFormState} from "../states/observation-form.state";
import {Action} from "@ngrx/store";
import {SimpleAction} from "../../classes/simple-action.class";
import {AnimalState} from "../states/animal.state";

export function animalReducer(state:AnimalState = initialState, action:SimpleAction): AnimalState{
  console.warn(action)
  switch(action.type){
    case '[Animal Type] Get All': return {...state}
    case '[Animal Family] Get All': return {...state}
    case '[Animal Type] Get All success': return {
      ...state,
      types: action.payload }
    case '[Animal Family] Get All success': return {
      ...state,
      families: action.payload }
    case '[Animal Type] Get All failed': return {...state}
    case '[Animal Family] Get All failed': return {...state}

    default:
      return {...state}

  }
}
