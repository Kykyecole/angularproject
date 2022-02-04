import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  liste: any;
  constructor() {
    this.liste = [];
  }

  getListe(id: number): [] {
    let res = localStorage.getItem('DocumentJeux'+id);
    if (res != null) this.liste = JSON.parse(res);
    console.log("test3");
    console.log(this.liste);
    return this.liste;
  }

  getTest(){

    localStorage.clear();
   
  }


  generateId(): number {
    return Date.now();
  }

  addDocument(form: any,ident:number): void {
    const id = this.generateId();
    form.id = id;
    this.liste.push(form);
    localStorage.setItem('DocumentJeux'+ident, JSON.stringify(this.liste));
  }

  updateDocument(form: any,ident:number): void {
    const id = form.id;
    let elem = this.getDocumentById(id);
    if (!elem.id) alert('Erreur lors de la modification');
    else {
      let indice = this.liste.indexOf(elem);
      if (indice > -1) this.liste[indice] = form;
      localStorage.setItem('DocumentJeux'+ident, JSON.stringify(this.liste));
      this.getListe(id);
    }
  }

  getDocumentById(id: number): any {

    return this.liste.find((elem: any) => elem.id == id);

  }

  deleteDocument(id: number,id2: number): void {
    let elem = this.getDocumentById(id);
    if (!elem.id) alert('Erreur lors de la suppression');
    else {
      let indice = this.liste.indexOf(elem);
      this.liste.splice(indice, 1);
      localStorage.setItem('DocumentJeux'+id2, JSON.stringify(this.liste));
      this.getListe(id);
    }
  }
}
