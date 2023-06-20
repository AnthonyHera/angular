import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {ObservationFormModel} from "../../../shared/models/observation-form.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-observation-list',
  templateUrl: './observation-list.component.html',
  styleUrls: ['./observation-list.component.scss']
})
export class ObservationListComponent implements OnInit, OnDestroy {
  tableau : Array<ObservationFormModel> =[]
  private sub : Subscription ;
  constructor(private api:ApiService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.api.searchAllFormulaire().subscribe(data => this.tableau = data)
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe()

  }

}
