import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ObservationFormModel} from "../../../shared/models/observation-form.model";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../../shared/store/states/app.state";
import {SimpleAction} from "../../../shared/classes/simple-action.class";

@Component({
  selector: 'app-observation-list',
  templateUrl: './observation-list.component.html',
  styleUrls: ['./observation-list.component.scss']
})
export class ObservationListComponent implements OnInit, OnDestroy {


  private _data : Array<ObservationFormModel> =[]
  header : Array<string> =[
    'id','animalType','islandId','islandDistance'
  ]

  private sub : Subscription ;
  constructor(private api:ApiService,
              private store: Store<AppState>,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.dispatch(new SimpleAction('[Observation Form] Get All'))
    this.sub = this.api.searchAllFormulaire()
      .subscribe(data => this.data = data)

  }

  get data(): Array<ObservationFormModel> {
    return this._data;
  }

  set data(value: Array<ObservationFormModel>) {
    this._data = value;
  }

  get table(): Array<any>{
    return this.data.length >0 ? this.data.map(item=>
    [item.id,item.animalType.type, item.islandId, item.islandDistance]) : [];
  }



  ngOnDestroy(): void{
    this.sub.unsubscribe()

  }

}
