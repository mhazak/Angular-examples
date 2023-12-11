import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-buttons',
  template: ` <div
    *ngIf="{ value: isDisabled$$ | async } as isDisabled"
    class="gap-sm"
  >
    <button pButton>Edit</button>
    <button pButton class="p-button-success" [disabled]="isDisabled.value">
      Remove
    </button>
    <button pButton class="p-button-secondary" [disabled]="isDisabled.value">
      New release
    </button>
  </div>`,
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  isDisabled$$ = new BehaviorSubject<boolean>(false);
}
