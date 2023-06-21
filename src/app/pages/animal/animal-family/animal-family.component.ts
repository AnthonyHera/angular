import {Component, OnDestroy, OnInit} from '@angular/core';
import {ObservationFormModel} from "../../../shared/models/observation-form.model";
import {AnimalFamily} from "../../../shared/models/animal-family.model";
import {Subject, Subscription, takeUntil} from "rxjs";
import {ApiService} from "../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {AppState} from "../../../shared/store/states/app.state";
import {Store} from "@ngrx/store";
import {SimpleAction} from "../../../shared/classes/simple-action.class";

@Component({
  selector: 'app-animal-family',
  templateUrl: './animal-family.component.html',
  styleUrls: ['./animal-family.component.scss']
})
export class AnimalFamilyComponent implements OnInit , OnDestroy{
  private _data : Array<AnimalFamily> =[]
  private destroy$: Subject<void> = new Subject<void>()
  header : Array<string> =[
    'id','nom','test'
  ]
  private sub : Subscription ;
  constructor(private api:ApiService,
              private route: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit(): void {
   // this.sub = this.api.searchAllFamily().subscribe(data => this.data = data)

    this.store.select('animal').pipe(takeUntil(this.destroy$))
      .subscribe(value =>this.data = [...value.families])
    this.store.dispatch(new SimpleAction('[Animal Family] Get All'))

  }
  get data(): Array<AnimalFamily> {
    return this._data;
  }

  set data(value: Array<AnimalFamily>) {
    this._data = value;
  }
  get table(): Array<any>{
    return this.data.length >0 ? this.data.map(item=>
      [item.id,item.family, item.breathHold]) : [];
  }

  ngOnDestroy(): void{
    this.destroy$.unsubscribe()
  }

}
