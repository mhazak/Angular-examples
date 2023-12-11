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

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    ButtonModule,
    SharedModule,
    AppBaseExampleRoutingModule,
  ],
  declarations: [
    BaseExampleComponent,
    MagazinesComponent,
    BooksComponent,
    BookComponent,
    ButtonsComponent,
  ],
})
export class SubscribeBaseExampleModule {}
