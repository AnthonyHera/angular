import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-observation-item',
  templateUrl: './observation-item.component.html',
  styleUrls: ['./observation-item.component.scss']
})
export class ObservationItemComponent implements OnInit {
  formulaireId: string = null;
  constructor(private api:ApiService,
              private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.formulaireId = this.route.snapshot.paramMap.get('formulaireId');
    this.api.searchFormulaire(this.formulaireId).subscribe(data =>console.log(data))

  }

}
