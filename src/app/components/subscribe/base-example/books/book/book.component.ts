import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subject,
  catchError,
  filter,
  map,
  switchMap,
  tap,
} from 'rxjs';
import { Book } from 'src/app/models/book.interface';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  book$!: Observable<Book | null>;

  isDisabled$ = new BehaviorSubject<boolean>(false);
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.book$ = this.route.params.pipe(
      filter((params) => !!params['bookId']),
      tap(({ bookId }) => console.log({ bookId })),
      switchMap(({ bookId }) =>
        this.bookService.getBook(bookId).pipe(catchError(() => EMPTY))
      )
    );
  }
}
