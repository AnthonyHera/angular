import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ObservationFormModel} from "../models/observation-form.model";
import {environment} from "../../../environments/environment.dev";

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

  searchAllType(): Observable<any>{

  }
}
