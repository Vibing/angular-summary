import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  isCollapsed = false;

  menus = [
    {
      name: 'Form',
      icon: 'form',
      menus: [{ name: '配置动态转Form', route: '/form/json2form' }],
    },
  ];
}
