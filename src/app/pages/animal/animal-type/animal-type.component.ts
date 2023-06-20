import {Component, OnDestroy, OnInit} from '@angular/core';
import {AnimalType} from "../../../shared/models/animal-type.model";
import {Subscription} from "rxjs";
import {ApiService} from "../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ObservationFormModel} from "../../../shared/models/observation-form.model";

@Component({
  selector: 'app-animal-type',
  templateUrl: './animal-type.component.html',
  styleUrls: ['./animal-type.component.scss']
})
export class AnimalTypeComponent implements OnInit, OnDestroy {
  private _data : Array<AnimalType> =[]
  header : Array<string> =[
    'id','type'
  ]
  private sub : Subscription ;
  constructor(private api:ApiService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.api.searchAllType().subscribe(data => this.data = data)

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
