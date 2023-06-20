import {Component, OnDestroy, OnInit} from '@angular/core';
import {ObservationFormModel} from "../../../shared/models/observation-form.model";
import {AnimalFamily} from "../../../shared/models/animal-family.model";
import {Subscription} from "rxjs";
import {ApiService} from "../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-animal-family',
  templateUrl: './animal-family.component.html',
  styleUrls: ['./animal-family.component.scss']
})
export class AnimalFamilyComponent implements OnInit , OnDestroy{
  private _data : Array<AnimalFamily> =[]

  header : Array<string> =[
    'id','nom','test'
  ]
  private sub : Subscription ;
  constructor(private api:ApiService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.api.searchAllFamily().subscribe(data => this.data = data)
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
    this.sub.unsubscribe()
  }

}
