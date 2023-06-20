import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {ObservationFormModel} from "../../models/observation-form.model";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  //@Input() public data: Array<ObservationFormModel> = [];

  @Input() public headers: Array<string> = []

  @Input() public data: Array<Array<any>> = []




  @Output()
  public emitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

  }

}
