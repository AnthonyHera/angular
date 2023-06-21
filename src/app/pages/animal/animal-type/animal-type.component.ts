import {Component, OnDestroy, OnInit} from '@angular/core';
import {AnimalType} from "../../../shared/models/animal-type.model";
import {Subject, Subscription, takeUntil} from "rxjs";
import {ApiService} from "../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ObservationFormModel} from "../../../shared/models/observation-form.model";
import {SimpleAction} from "../../../shared/classes/simple-action.class";
import {Store} from "@ngrx/store";
import {AppState} from "../../../shared/store/states/app.state";

@Component({
  selector: 'app-animal-type',
  templateUrl: './animal-type.component.html',
  styleUrls: ['./animal-type.component.scss']
})
export class AnimalTypeComponent implements OnInit, OnDestroy {
  private destroy$ : Subject<void>=new Subject<void>()
  private _data : Array<AnimalType> =[]
  header : Array<string> =[
    'id','type'
  ]
  private sub : Subscription ;
  constructor(private api:ApiService,
              private route: ActivatedRoute,
             private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('animal').pipe(takeUntil(this.destroy$))
      .subscribe(value =>this.data = [...value.types])
    this.store.dispatch(new SimpleAction('[Animal Type] Get All'))

  }

  get data(): Array<AnimalType> {
    return this._data;
  }

  set data(value: Array<AnimalType>) {
    this._data = value;
  }

  get table(): Array<any>{
    return this.data.length >0 ? this.data.map(item=>
      [item.id, item.type]) : [];
  }
  ngOnDestroy() {
  }

}
