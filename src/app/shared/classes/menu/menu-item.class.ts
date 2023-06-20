/**
 * @descriptionThis class implements menu item model to create a new menu
 */
export class MenuItem {

  /**
   * Item Title
   */
  title: string;

  /**
   * Item relative link (for routerLink)
   */
  link?: string;

  /**
   * Icon class name or icon config object
   */
  icon?: string;

  /**
   * Children items
   */
  children?: MenuItem[];

  /**
   * Whether the item is just a group (non-clickable)
   */
  group?: boolean;

  /**
   * Additional data
   */
  data?: any;

  /**
   * Whether the item is collapsed
   */
  collapsed?: boolean;

  /**
   * Whether the item is protected for a specific role
   */
  roles?: string[];
}
