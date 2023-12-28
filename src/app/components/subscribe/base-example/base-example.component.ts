import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-base-example',
  templateUrl: './base-example.component.html',
  styleUrls: ['./base-example.component.css'],
})
export class BaseExampleComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'Imperative',
      icon: 'pi pi-fw pi-home',
      routerLink: 'imperative',
    },
    { label: 'Form', routerLink: 'form-subscription' },
    { label: 'Books', icon: 'pi pi-fw pi-home', routerLink: 'books' },
    { label: 'Take Until', icon: 'pi pi-fw pi-home', routerLink: 'take-until' },
    {
      label: 'Magazines',
      icon: 'pi pi-fw pi-calendar',
      routerLink: 'magazine',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
