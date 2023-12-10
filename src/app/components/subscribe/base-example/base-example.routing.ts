import { Routes, RouterModule } from '@angular/router';
import { BaseExampleComponent } from './base-example.component';
import { NgModule } from '@angular/core';
import { BooksComponent } from './books/books.component';
import { MagazinesComponent } from './magazines/magazines.component';

export enum SubscribePages {
  BASE_EXAMPLE = 'base-example',
}

const routes: Routes = [
  {
    path: SubscribePages.BASE_EXAMPLE,
    component: BaseExampleComponent,
    children: [
      { path: 'books', component: BooksComponent },
      { path: 'magazine', component: MagazinesComponent },
    ],
  },
];

export const BaseExampleRoutes = RouterModule.forChild(routes);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppBaseExampleRoutingModule {}