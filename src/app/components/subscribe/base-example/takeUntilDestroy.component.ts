import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject, combineLatest, startWith, takeUntil, finalize } from 'rxjs';

@Component({
  selector: 'app-takeUntilDestroy',
  template: `abc`,
})
export class TakeUntilDestroyComponent implements OnInit {
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
