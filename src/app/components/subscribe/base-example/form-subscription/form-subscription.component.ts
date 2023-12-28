import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-form-subscription',
  templateUrl: './form-subscription.component.html',
  styleUrls: ['./form-subscription.component.css'],
})
export class FormSubscriptionComponent implements OnInit {
  formGroup = new FormGroup({
    name: new FormControl(''),
    age: new FormControl<number | null>(null),
  });

  ngOnInit() {
    console.log('Ng OnInit');
    this.formGroup.controls.name.valueChanges
      .pipe(finalize(() => console.log('finalize')))
      .subscribe((val) => {
        console.log('New name ', val);
      });
  }
}
