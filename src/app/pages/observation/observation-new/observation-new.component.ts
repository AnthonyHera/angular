import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AnimalFamily} from "../../../shared/models/animal-family.model";
import {ApiService} from "../../../shared/services/api.service";
import {AnimalType} from "../../../shared/models/animal-type.model";
import {FormBuilder, FormGroup, Validators,  FormControl} from "@angular/forms";
import {IslandModel} from "../../../shared/models/island.model";
import {ObservationQuality} from "../../../shared/models/observation-quality.model";
import {Observable, Subject, takeUntil} from "rxjs";
import {SimpleAction} from "../../../shared/classes/simple-action.class";
import {Store} from "@ngrx/store";
import {AppState} from "../../../shared/store/states/app.state";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {environment} from "../../../../environments/environment.dev";
import {ObservationFormModel} from "../../../shared/models/observation-form.model";

@Component({
  selector: 'app-observation-new',
  templateUrl: './observation-new.component.html',
  styleUrls: ['./observation-new.component.scss']
})
export class ObservationNewComponent implements OnInit, OnDestroy {
  private destroy$ : Subject<void> = new Subject<void>()
  family : Array<AnimalFamily> = []
  specimen : Array<AnimalType> = []
  island : Array<IslandModel>
  observationQuality : Array<ObservationQuality> =[]

  formGroup : FormGroup

  constructor(private api : ApiService,
               private changeDetectorRef:ChangeDetectorRef,
              private formBuilder : FormBuilder,
              private store : Store<AppState>,
              private http: HttpClient

              ) { }

  ngOnInit(): void {
    this.store.select('animal').pipe(takeUntil(this.destroy$))
      .subscribe(value =>this.specimen = [...value.types])
    this.store.dispatch(new SimpleAction('[Animal Type] Get All'))

    this.store.select('animal').pipe(takeUntil(this.destroy$))
      .subscribe(value =>this.family = [...value.families])
    this.store.dispatch(new SimpleAction('[Animal Family] Get All'))

    this.api.searchAllQuality().subscribe(data =>this.observationQuality = data)
    this.api.searchAllIlot().subscribe(data => this.island = data)

    this.initForm()
    console.warn(this.formGroup.value)

  }

  public initForm(): void{
    this.formGroup  = this.formBuilder.group(
      {
        islandId :['', Validators.compose([
          Validators.required,
          Validators.pattern(/^(\s+\S=\s*)*(?!\s).*$/),
          Validators.minLength(2),
        ])],

        islandDistance :[null, Validators.compose([
          Validators.required,
        ])],
        breathHoldTime:[null,Validators.compose([
          Validators.required,
        ])],
        animalTypeId:[null,Validators.compose([
          Validators.required,
        ])],
        animalFamilyId:[null,Validators.compose([
          Validators.required,
        ])],
        estimatedSubjectSize:[null,Validators.compose([
          Validators.required,
        ])],
        estimatedSubjectsNumber:[null,Validators.compose([
          Validators.required,
        ])],
        observationDate:[null,Validators.compose([
          Validators.required,
        ])],
        observationQualityId:[null,Validators.compose([
          Validators.required,
        ])],

      }
    )


  }
  public isFocused(value : HTMLElement) : boolean {
    return document.activeElement ===value
  }
  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
  submit() {


    let data = this.formGroup.value
    console.warn(data)

    return this.http.post(environment.API_HOST+'/observation', data)
      .subscribe(
        data => console.log('success', data),
        error => console.log('oops', error)
      );
  }
}
