import {AnimalType} from "../../models/animal-type.model";
import {AnimalFamily} from "../../models/animal-family.model";

export interface AnimalState {
  types: AnimalType[],
  families: AnimalFamily[]
}
export const initialState: AnimalState = {
  types:[],
  families:[]
}
