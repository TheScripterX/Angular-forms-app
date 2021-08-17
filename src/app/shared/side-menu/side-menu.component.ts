import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class SideMenuComponent {
  templateMenu: MenuItem[] = [
    {
      text: 'basics',
      route: './template/basics',
    },
    {
      text: 'dynamic',
      route: './template/dynamic',
    },
    {
      text: 'switches',
      route: './template/switches',
    },
  ];

  reactiveMenu: MenuItem[] = [
    {
      text: 'basics',
      route: './reactive/basics',
    },
    {
      text: 'dynamic',
      route: './reactive/dynamic',
    },
    {
      text: 'switches',
      route: './reactive/switches',
    },
  ];

  authMenu: MenuItem[] = [
    { text: 'login', route: './auth/login' },
    { text: 'register', route: './auth/register' },
  ];
}
