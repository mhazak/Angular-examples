import { Routes, RouterModule } from '@angular/router';
import { BaseExampleComponent } from './base-example.component';
import { NgModule } from '@angular/core';
import { BooksComponent } from './books/books.component';
import { MagazinesComponent } from './magazines/magazines.component';
import { BookComponent } from './books/book/book.component';
import { TakeUntilComponent } from './takeUntil.component';
import { ImperativeComponent } from './books/imperative/imperative.component';
import { FormSubscriptionComponent } from './form-subscription/form-subscription.component';
import { ManuallyUnsubscribeComponent } from './manually-unsubscribe.component';
import { AutomaticallyUnsubscribeComponent } from './automatically-unsubscribe.component';
import { TakeUntilDestroyComponent } from './takeUntilDestroy.component';

export enum SubscribePages {
  BASE_EXAMPLE = 'base-example',
}

const routes: Routes = [
  {
    path: SubscribePages.BASE_EXAMPLE,
    component: BaseExampleComponent,
    children: [
      {
        path: 'books',
        children: [
          { path: '', pathMatch: 'full', component: BooksComponent },
          {
            path: ':bookId',
            component: BookComponent,
          },
        ],
      },
      {
        path: 'imperative',
        pathMatch: 'full',
        component: ImperativeComponent,
      },
      { path: 'manually', component: ManuallyUnsubscribeComponent },
      { path: 'automatically', component: AutomaticallyUnsubscribeComponent },
      {
        path: 'form-subscription',
        component: FormSubscriptionComponent,
      },
      { path: 'take-until', component: TakeUntilComponent },
      { path: 'take-until-destroy', component: TakeUntilDestroyComponent },
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
