import { Component, OnInit } from '@angular/core';
import { Magazine } from 'src/app/models/magazine.interface';
import { MagazineService } from 'src/app/services/magazine.service';

@Component({
  selector: 'app-magazines',
  templateUrl: './magazines.component.html',
  styleUrls: ['./magazines.component.css'],
})
export class MagazinesComponent implements OnInit {
  magazines: Magazine[] = [];
  constructor(private readonly magazineService: MagazineService) {}

  ngOnInit() {
    this.magazineService
      .getMagazines()
      .subscribe((magazines) => (this.magazines = magazines));
  }
}
