import {ObservationQuality} from "./observation-quality.model";
import {AnimalFamily} from "./animal-family.model";
import {AnimalType} from "./animal-type.model";

export class ObservationFormModel {
  id?: number;
  islandTitle: string;
  islandDistance: number;
  islandId: number;

  estimatedSubjectsSize: number;
  estimatedSubjectsNumber: number;

  observationDate: string;
  observationQuality: ObservationQuality;
  animalFamily: AnimalFamily;
  animalType: AnimalType;
}
