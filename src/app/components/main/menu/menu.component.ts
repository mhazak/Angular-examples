import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RoutingPages } from 'src/app/app-routing.module';
import { SubscribePages } from '../../subscribe/base-example/base-example.routing';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Subscription',
        items: [
          {
            label: 'Base example',
            routerLink: `subscribe/base-example`,
            icon: 'pi pi-refresh',
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
          },
        ],
      },
      {
        label: 'Navigate',
        items: [
          {
            label: 'Angular',
            icon: 'pi pi-external-link',
            url: 'http://angular.io',
          },
          {
            label: 'Router',
            icon: 'pi pi-upload',
            routerLink: '/fileupload',
          },
        ],
      },
    ];
  }
}
