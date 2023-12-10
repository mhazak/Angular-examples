import { Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Subscription, catchError } from 'rxjs';
import { Book } from 'src/app/models/book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit, OnDestroy {
  books: Book[] = [];

  subscriptions: Subscription[] = [];
  constructor(private readonly bookService: BookService) {}

  ngOnInit() {
    this.subscriptions.push(
      this.bookService
        .getBooks()
        .pipe(catchError(() => EMPTY))
        .subscribe({
          next: (books) => {
            console.log('Observable emits next value', books);
            this.books = books;
          },
          error: (err) => {
            console.error('Error occurs', err);
          },
          complete: () => {
            console.log('Observable completed, unsubscribing!');
          },
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
