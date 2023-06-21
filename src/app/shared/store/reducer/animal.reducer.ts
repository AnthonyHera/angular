import {initialState} from "../states/animal.state";
import {SimpleAction} from "../../classes/simple-action.class";
import {AnimalState} from "../states/animal.state";

export function animalReducer(state: AnimalState = initialState, action:SimpleAction): AnimalState{
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
