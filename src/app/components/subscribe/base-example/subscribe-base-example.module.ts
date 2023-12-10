import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseExampleComponent } from './base-example.component';
import { SharedModule } from '../../shared/shared.module';
import { MagazinesComponent } from './magazines/magazines.component';
import { BooksComponent } from './books/books.component';
import { RouterModule } from '@angular/router';
import { AppBaseExampleRoutingModule } from './base-example.routing';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    SharedModule,
    AppBaseExampleRoutingModule,
  ],
  declarations: [BaseExampleComponent, MagazinesComponent, BooksComponent],
})
export class SubscribeBaseExampleModule {}
