import { MenuItem } from '../classes/menu/menu-item.class';

/**
 * @description This array represents the definition of the English menu in the application
 */
export const menuData: Array<MenuItem> = [
  {
    title: 'Management',
    group: true
  },
  {
    title: 'Observation form',
    icon: 'bi-list',
    collapsed: true,
    link: '/pages/observation',
    children: [
      {
        title: 'List of observation forms',
        icon: 'chevron-right-outline',
        link: '/pages/observation/list'
      },
      {
        title: 'New observation form',
        icon: 'chevron-right-outline',
        link: '/pages/observation/new'
      }
    ]
  },
  {
    title: 'Marine animals',
    icon: 'bi-tsunami',
    collapsed: true,
    link: '/pages/animal',
    children: [
      {
        title: 'Species surveyed',
        icon: 'chevron-right-outline',
        link: '/pages/animal/type'
      },
      {
        title: 'Marine animal families',
        icon: 'chevron-right-outline',
        link: '/pages/animal/family'
      }
    ]
  }
];
