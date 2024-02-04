import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseExampleComponent } from './base-example.component';
import { SharedModule } from '../../shared/shared.module';
import { MagazinesComponent } from './magazines/magazines.component';
import { BooksComponent } from './books/books.component';
import { AppBaseExampleRoutingModule } from './base-example.routing';
import { BookComponent } from './books/book/book.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonModule } from 'primeng/button';
import { TakeUntilComponent } from './takeUntil.component';
import { ImperativeComponent } from './books/imperative/imperative.component';
import { FormSubscriptionComponent } from './form-subscription/form-subscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ManuallyUnsubscribeComponent } from './manually-unsubscribe.component';
import { AutomaticallyUnsubscribeComponent } from './automatically-unsubscribe.component';
import { TakeUntilDestroyComponent } from './takeUntilDestroy.component';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    ButtonModule,
    SharedModule,
    AppBaseExampleRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
  ],
  declarations: [
    BaseExampleComponent,
    MagazinesComponent,
    BooksComponent,
    BookComponent,
    ButtonsComponent,
    TakeUntilComponent,
    ImperativeComponent,
    FormSubscriptionComponent,
    ManuallyUnsubscribeComponent,
    AutomaticallyUnsubscribeComponent,
    TakeUntilDestroyComponent,
  ],
})
export class SubscribeBaseExampleModule {}
