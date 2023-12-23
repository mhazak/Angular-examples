import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { EMPTY, catchError, first, fromEvent, of, take, tap } from 'rxjs';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  // template: `
  //   <ng-container *ngIf="books$ | async as books">
  //     <h1>Total books: {{ books?.length }}</h1>
  //     <pre>{{ books | json }}</pre>
  //     <app-buttons></app-buttons>
  //   </ng-container>
  // `,
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  @ViewChildren('tableRow') tableRows!: QueryList<
    ElementRef<HTMLTableRowElement>
  >;
  books$ = this.bookService.getBooks().pipe(
    tap(() => console.log('I have been subscribed!')),
    catchError(() => EMPTY)
  );

  ngAfterViewInit() {
    this.tableRows.changes.subscribe((tableRows: typeof this.tableRows) =>
      tableRows.forEach((row) => {
        const rowElement = row.nativeElement;
        fromEvent(rowElement, 'mouseover')
          .pipe(first())
          .subscribe({
            next: (event) => {
              console.log('id:', rowElement.id, 'I should call BackEnd!');
            },
            error: (error) => {
              console.error(error);
              return EMPTY;
            },
            complete: () => {
              console.log('completed, unsubscribing!');
            },
          });
      })
    );
  }
  constructor(private readonly bookService: BookService) {}
}
