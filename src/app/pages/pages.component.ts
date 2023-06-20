import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../shared/classes/menu/menu-item.class';
import { menuData } from '../shared/datas/sidebar-menu.data';

@Component({
  selector: 'app-pages',
  template: `
    <app-layout>
      <app-header></app-header>
      <app-sidebar [menuItems]="menuItems"></app-sidebar>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </app-layout>`
})
export class PagesComponent implements OnInit {

  /**
   * @description Constructor of PagesComponent component
   *
   * The constructor creates an instance of the PagesComponent component and specifies the default values
   * the input and output variables of the component.
   */
  constructor() {
  }

  /**
   * @description Items in the component menu SidebarComponent
   *
   * A map is used to ensure the uniqueness of the items by title.
   * The elements are sorted in {@link menuItems}.
   */
  private _menuItems: Map<string, MenuItem> = new Map<string, MenuItem>();

  /**
   * @description The method allows you to retrieve the sorted items from the SidebarComponent menu.
   */
  get menuItems(): Array<MenuItem> {
    return Array.from(this._menuItems.values());
  }

  /**
   * @description The method is used to assign the menu items of the SidebarComponent
   * Empty the item map and fill it with the input table using the item title as the key.
   *
   * @param value Value of the new SidebarComponent menu items
   */
  set menuItems(value: Array<MenuItem>) {
    this._menuItems.clear();
    value.forEach(item => this._menuItems.set(item.title, item));
  }

  /**
   * @description: This method is part of the component life cycle: lifecycle hook.
   *
   * It is called when Angular initializes the view of a component.
   * It first displays the properties related to the data and defines the input properties of the component.
   * Defining an ngOnInit() method allows you to manage any additional initialization tasks.
   */
  public ngOnInit(): void {
    this.menuItems = menuData;
  }
}
