import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ObservationFormModel} from "../models/observation-form.model";
import {environment} from "../../../environments/environment.dev";
import {AnimalTypeComponent} from "../../pages/animal/animal-type/animal-type.component";
import {AnimalFamilyComponent} from "../../pages/animal/animal-family/animal-family.component";
import {AnimalFamily} from "../models/animal-family.model";
import {AnimalType} from "../models/animal-type.model";
import {IslandModel} from "../models/island.model";
import {ObservationQuality} from "../models/observation-quality.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }
  const
  searchAllFormulaire(): Observable<ObservationFormModel[]>{
    return this.http.get(environment.API_HOST + '/observation')
      .pipe(map(item =>item['data']))
  }


  searchFormulaire(id):Observable<ObservationFormModel>{
    return this.http.get(environment.API_HOST +'/observation/'+id)
      .pipe(map(item =>item['data']))
  }

  searchAllType(): Observable<AnimalType[]>{
    return this.http.get(environment.API_HOST +'/animal/type')
      .pipe(map(item =>item['data']))
  }
  searchAllFamily(): Observable<AnimalFamily[]>{
    return this.http.get(environment.API_HOST +'/animal/family')
      .pipe(map(item =>item['data']))
  }
  searchAllIlot(): Observable<IslandModel[]>{
    return this.http.get(environment.API_HOST +'/island')
      .pipe(map(item =>item['data']))
  }
  searchAllQuality(): Observable<ObservationQuality[]>{
    return this.http.get(environment.API_HOST +'/observation/quality')
      .pipe(map(item =>item['data']))
  }
}
