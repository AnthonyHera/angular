import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../classes/menu/menu-item.class';

@Component({
  selector: 'app-sidebar',
  styleUrls: ['./sidebar.component.scss'],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {

  /**
   * @description Items in the sidebar menu
   */
  @Input()
  public menuItems: Array<MenuItem>;

  /**
   * @description Constructor of SidebarComponent component
   *
   * The constructor creates an instance of the SidebarComponent component and specifies the default values
   * the input and output variables of the component.
   *
   * @param router Angular Router enables navigation from one view to the next as users perform application tasks
   * @param changeDetectorRef Base class that provides change detection functionality
   */
  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) {
  }

  /**
   * @description: This method is used to close or open an item in the component menu
   */
  public toggle(item: MenuItem): void {
    item.collapsed = !item.collapsed;
    this.changeDetectorRef.markForCheck();
  }
}
