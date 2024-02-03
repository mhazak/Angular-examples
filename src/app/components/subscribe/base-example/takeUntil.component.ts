import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, combineLatest, finalize, startWith, takeUntil } from 'rxjs';

@Component({
  selector: 'app-takeUntil',
  template: `<form [formGroup]="formGroup">
    <input pInputText placeholder="Name" formControlName="name" />
    <input pInputText placeholder="Surname" formControlName="surname" />
    <input pInputText placeholder="Email" formControlName="email" />
  </form>`,
})
export class TakeUntilComponent implements OnInit, OnDestroy {
  formGroup = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl('', Validators.email),
  });
  destroy$ = new Subject<void>();

  ngOnInit(): void {
    combineLatest([
      this.formGroup.controls.name.valueChanges.pipe(startWith('')),
      this.formGroup.controls.surname.valueChanges.pipe(startWith('')),
    ])
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => console.log('UNSUBSCRIBED'))
      )
      .subscribe(([name, surname]) => {
        this.formGroup.controls.email.setValue(
          `${name?.toLowerCase()}.${surname?.toLowerCase()}@gmail.com`
        );
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
