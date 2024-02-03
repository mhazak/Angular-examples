import { Component, OnInit } from '@angular/core';
import { Observable, finalize, fromEvent, map, scan } from 'rxjs';

@Component({
  selector: 'app-automatically-unsubscribe',
  template: ` <p-button
      [label]="started ? 'Stop' : 'Start'"
      (onClick)="started = !started"
    ></p-button>
    <ng-container *ngIf="started">
      <h4>Write something nice:</h4>
      <hr />
      <div *ngIf="string$ | async as string">
        <h3>{{ string }}</h3>
      </div>
    </ng-container>`,
})
export class AutomaticallyUnsubscribeComponent implements OnInit {
  started = false; // show string
  string$!: Observable<string>; // string showed in screen

  ngOnInit() {
    // assign observable to variable
    this.string$ = fromEvent(window, 'keyup').pipe(
      map((event) => event as KeyboardEvent), // map event to KeyboardEvent
      map(({ key }) => key), // return Pressed Key
      scan((currentString, keyPressed) => currentString + keyPressed), // concat previously pressed key with current
      finalize(() => console.log('UNSUBSCRIBED')) // log when observable is completed (unsubscribed)
    );
  }
}
