import { Component } from '@angular/core';
import { EMPTY, catchError, tap } from 'rxjs';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  template: `
    <ng-container *ngIf="books$ | async as books">
      <h1>Total books: {{ books?.length }}</h1>
      <pre>{{ books | json }}</pre>
      <app-buttons></app-buttons>
    </ng-container>
  `,
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  books$ = this.bookService.getBooks().pipe(
    tap(() => console.log('I have been subscribed!')),
    catchError(() => EMPTY)
  );
  constructor(private readonly bookService: BookService) {}
}
