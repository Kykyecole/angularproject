import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarnetService {
  liste: any;
  formulaire!:any;
  constructor() {
    this.liste = [];
    
  }

  getListe(): [] {
    let res = localStorage.getItem('CarnetJeux');
    if (res != null) this.liste = JSON.parse(res);
    return this.liste;
  }

  generateId(): number {
    return Date.now();
  }

  addCarnet(form: any): void {

    const id = this.generateId();
    form.id = id;
    this.liste.push(form);
    localStorage.setItem('CarnetJeux', JSON.stringify(this.liste));
    this.formulaire = {
      nom: 'Premier document explicatif',
      description: 'Voici le premier document de votre carnet !',
      id:id,

    };
    console.log(this.liste);
    this.liste=[];
    console.log(form);
    console.log(this.formulaire);
    this.liste.push(this.formulaire);
    
    localStorage.setItem('DocumentJeux'+id, JSON.stringify(this.liste));
    
  }

  updateCarnet(form: any): void {
    const id = form.id;
    let elem = this.getCarnetById(id);
    if (!elem.id) alert('Erreur lors de la modification');
    else {
      let indice = this.liste.indexOf(elem);
      if (indice > -1) this.liste[indice] = form;
      localStorage.setItem('CarnetJeux', JSON.stringify(this.liste));
      this.getListe();
    }
  }

  getCarnetById(id: number): any {
    return this.liste.find((elem: any) => elem.id == id);
  }

  deleteCarnet(id: number): void {
    let elem = this.getCarnetById(id);
    if (!elem.id) alert('Erreur lors de la suppression');
    else {
      let indice = this.liste.indexOf(elem);
      this.liste.splice(indice, 1);
      localStorage.setItem('CarnetJeux', JSON.stringify(this.liste));
      this.getListe();
    }
  }
}
