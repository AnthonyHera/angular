import {initialState, ObservationFormState} from "../states/observation-form.state";
import {Action} from "@ngrx/store";

export function observationFormReducer(state:ObservationFormState = initialState, action:Action): ObservationFormState{
  console.warn(action)
  switch(action.type){
    case '[Observation Form] Get All': return {...state}
    case '[Observation Form] Get All success': return {...state}
    case '[Observation Form] Get All failed': return {...state}
    default:
      return {...state}


  }
}
