import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { Magazine } from '../models/magazine.interface';

@Injectable({
  providedIn: 'root',
})
export class MagazineService {
  constructor() {}

  getMagazines() {
    const magazines: Magazine[] = [
      { id: 1, name: 'National Geographic' },
      { id: 2, name: 'Time Magazine' },
      { id: 3, name: 'The New Yorker' },
      { id: 4, name: 'Wired' },
      { id: 5, name: 'Vogue' },
      { id: 6, name: 'Scientific American' },
      { id: 7, name: 'Sports Illustrated' },
      { id: 8, name: 'Rolling Stone' },
      { id: 9, name: 'Economist' },
      { id: 10, name: 'Smithsonian' },
    ];
    return of(magazines).pipe(delay(500));
  }
}
