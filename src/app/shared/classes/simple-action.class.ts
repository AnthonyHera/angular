import {Action} from "@ngrx/store";

export class SimpleAction implements Action {
  type: string;
  payload?:any;
  constructor(type: string, paylaod?: any){
    this.type = type;
    this.payload = paylaod
  }
}
