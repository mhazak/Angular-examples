import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-base-example',
  templateUrl: './base-example.component.html',
  styleUrls: ['./base-example.component.css'],
})
export class BaseExampleComponent implements OnInit {
  items: MenuItem[] = [
    { label: 'Books', icon: 'pi pi-fw pi-home', routerLink: 'books' },
    {
      label: 'Magazines',
      icon: 'pi pi-fw pi-calendar',
      routerLink: 'magazine',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
