import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {ObservationFormModel} from "../../models/observation-form.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() public data: Array<ObservationFormModel> = [];

  @Output()
  public emitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

  }

}
