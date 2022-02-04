import { Component, OnInit, Input } from '@angular/core';
import { CarnetService } from '../services/carnet/carnet.service';

@Component({
  selector: 'app-Carnet-page',
  templateUrl: './Carnet-page.component.html',
  styleUrls: ['./Carnet-page.component.scss'],
})
export class CarnetPageComponent implements OnInit {
  liste: any;
  
  @Input() search!: string;
  
  constructor(public CarnetService: CarnetService) {}

  ngOnInit(): void {
    this.liste = this.CarnetService.getListe();
    this.search ="";
    console.log(this.liste);
  }

  delete(id: number) {
    let res = confirm('Etes-vous sûr de vouloir supprimer le carnet ? ');
    if (res) this.CarnetService.deleteCarnet(id);
  }
}
