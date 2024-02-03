import { Component } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-manually-unsubscribe',
  template: `<p-button
      [label]="started ? 'Stop' : 'Start'"
      (onClick)="handleKeyboardEvent()"
    ></p-button>
    <div *ngIf="started">
      <h4>Write something nice:</h4>
      <hr />
      <h3>{{ string }}</h3>
    </div> `,
})
export class ManuallyUnsubscribeComponent {
  started = false; // show string
  string = ''; // string showed in screen
  subscription!: Subscription;

  // click event
  handleKeyboardEvent() {
    // check if subscription exist - if yes, unsubscribe to older subscription
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.string = '';
    this.started = !this.started;

    // do not create new subscription if its not started
    if (!this.started) {
      return;
    }
    // assign subscription into variable watch for keyboard presses
    fromEvent(window, 'keyup').subscribe((event) => {
      const evt = event as KeyboardEvent;
      this.string += evt.key;
    });
  }
}
