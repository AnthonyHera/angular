import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AnimalFamily} from "../../../shared/models/animal-family.model";
import {ApiService} from "../../../shared/services/api.service";
import {AnimalType} from "../../../shared/models/animal-type.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IslandModel} from "../../../shared/models/island.model";
import {ObservationQuality} from "../../../shared/models/observation-quality.model";

@Component({
  selector: 'app-observation-new',
  templateUrl: './observation-new.component.html',
  styleUrls: ['./observation-new.component.scss']
})
export class ObservationNewComponent implements OnInit {
  family : Array<AnimalFamily> = []
  specimen : Array<AnimalType> = []
  island : Array<IslandModel> = []
  observationQuality : Array<ObservationQuality> =[]


  formGroup : FormGroup

  constructor(private api : ApiService,
               private changeDetectorRef:ChangeDetectorRef,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.api.searchAllQuality().subscribe(data =>this.observationQuality = data)
    this.api.searchAllIlot().subscribe(data => this.island = data)
    this.api.searchAllFamily().subscribe(data =>this.family =data)
    this.api.searchAllType().subscribe(data =>this.specimen = data)

    this.initForm()

  }

  public initForm(): void{
    this.formGroup = this.formBuilder.group(
      {
        islandId :['', Validators.compose([
          Validators.required,
          Validators.pattern(/^(\s+\S=\s*)*(?!\s).*$/)
        ])],
        islandTitle :['', Validators.compose([
          Validators.required,
        ])],
        islandDistance :[null, Validators.compose([
          Validators.required,
        ])],
        breathHoldTime:[null,Validators.compose([
          Validators.required,
        ])],
        animalType:[null,Validators.compose([
          Validators.required,
        ])],
        animalFamily:[null,Validators.compose([
          Validators.required,
        ])],
        estimatedSubjectsSize:[null,Validators.compose([
          Validators.required,
        ])],
        estimatedSubjectsNumber:[null,Validators.compose([
          Validators.required,
        ])],
        observationDate:[null,Validators.compose([
          Validators.required,
        ])],
        observationQuality:[null,Validators.compose([
          Validators.required,
        ])],

      }
    )

  }

}
