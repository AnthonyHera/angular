import {ObservationFormState} from "./observation-form.state";
import {AnimalState} from "./animal.state";

export interface AppState {
  observationForm: ObservationFormState
  animal: AnimalState
}
