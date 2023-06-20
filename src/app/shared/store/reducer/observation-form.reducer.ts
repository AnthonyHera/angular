import {initialState, ObservationFormState} from "../states/observation-form.state";
import {Action} from "@ngrx/store";
import {SimpleAction} from "../../classes/simple-action.class";

export function observationFormReducer(state:ObservationFormState = initialState, action:SimpleAction): ObservationFormState{
  console.warn(action)
  switch(action.type){
    case '[Observation Form] Get All': return {...state}
    case '[Observation Form] Get All success': return {
      ...state,
      data: action.payload }
    case '[Observation Form] Get All failed': return {...state}
    default:
      return {...state}


  }
}
