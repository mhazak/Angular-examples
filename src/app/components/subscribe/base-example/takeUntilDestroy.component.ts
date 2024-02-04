import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { combineLatest, startWith, finalize } from 'rxjs';

@Component({
  selector: 'app-takeUntilDestroy',
  template: `<form [formGroup]="formGroup">
    <input pInputText placeholder="Name" formControlName="name" />
    <input pInputText placeholder="Surname" formControlName="surname" />
    <input pInputText placeholder="Email" formControlName="email" />
  </form>`,
})
export class TakeUntilDestroyComponent implements OnInit {
  formGroup = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl('', Validators.email),
  });

  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    combineLatest([
      this.formGroup.controls.name.valueChanges.pipe(startWith('')),
      this.formGroup.controls.surname.valueChanges.pipe(startWith('')),
    ])
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => console.log('UNSUBSCRIBED'))
      )
      .subscribe(([name, surname]) => {
        this.formGroup.controls.email.setValue(
          `${name?.toLowerCase()}.${surname?.toLowerCase()}@gmail.com`
        );
      });
  }
}
