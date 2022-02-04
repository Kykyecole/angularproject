import { Component, OnInit } from '@angular/core';
import { CarnetService } from '../services/carnet/carnet.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carnet-update-page',
  templateUrl: './carnet-update-page.component.html',
  styleUrls: ['./carnet-update-page.component.scss'],
})
export class CarnetUpdatePageComponent implements OnInit {
  Carnet: any;
  form: any;
  constructor(
    public CarnetService: CarnetService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.form = {
      nom: '',
      description: '',
    };
  }
  update(): void {
    this.CarnetService.updateCarnet(this.form);
    this.router.navigate(['/carnet']);
  }

  reset(): void {
    this.form = { ...this.Carnet };
  }
  ngOnInit(): void {
    let id: any;
    this.CarnetService.getListe();
    this.route.params.subscribe((params) => (id = params['id']));
    this.Carnet = this.CarnetService.getCarnetById(id);
    this.form = { ...this.Carnet };
    console.log(this.form);
  }
}
