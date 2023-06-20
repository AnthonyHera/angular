import {ObservationFormModel} from "../../models/observation-form.model";

export interface ObservationFormState {
  data: ObservationFormModel[]
}
export const initialState: ObservationFormState = {
  data:[]
}
