import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  /**
   * @description Constructor of FooterComponent component
   *
   * The constructor creates an instance of the FooterComponent component and specifies the default values
   * the input and output variables of the component.
   */
  constructor() {
  }

  /**
   * @description Current date
   */
  private _date: number;

  /**
   * @description The method allows you to retrieve the current date
   */
  get date(): number {
    return this._date;
  }

  /**
   * @description The method is used to assign the current date.
   *
   * @param value Value of the current date
   */
  set date(value: number) {
    this._date = value;
  }

  /**
   * @description: This method is part of the component life cycle: lifecycle hook.
   *
   * It is called when Angular initializes the view of a component.
   * It first displays the properties related to the data and defines the input properties of the component.
   * Defining an ngOnInit() method allows you to manage any additional initialization tasks.
   */
  public ngOnInit(): void {
    this.date = Date.now();
  }
}
