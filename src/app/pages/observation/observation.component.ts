import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../shared/services/api.service";

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.scss']
})
export class ObservationComponent implements OnInit {


  constructor(private api:ApiService) { }

  ngOnInit(): void {

  }

}
