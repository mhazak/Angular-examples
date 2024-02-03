import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-takeUntil',
  templateUrl: './takeUntil.component.html',
  styleUrls: ['./takeUntil.component.css'],
})
export class TakeUntilComponent implements OnInit {
  constructor() {}
  keyPressed: string[] = [];

  ngOnInit() {
    fromEvent(window, 'keyup').subscribe((event) => {
      const keyboardEvent = event as KeyboardEvent;
      this.keyPressed.push(keyboardEvent.key);
      console.log(keyboardEvent.key);
    });
  }
}
