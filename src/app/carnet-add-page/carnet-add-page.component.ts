import { Component, OnInit } from '@angular/core';
import { CarnetService } from '../services/carnet/carnet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carnet-add-page',
  templateUrl: './carnet-add-page.component.html',
  styleUrls: ['./carnet-add-page.component.scss'],
})
export class CarnetAddPageComponent implements OnInit {
  form: any;
  constructor(public CarnetService: CarnetService, public router: Router) {
    this.form = {
      nom: '',
      description: '',
    };
  }

  add(): void {
    this.CarnetService.addCarnet(this.form);
    this.router.navigate(['/carnet']);
  }

  reset(): void {
    this.form = {
      nom: '',
      description: '',
    };
  }

  ngOnInit(): void {}
}
