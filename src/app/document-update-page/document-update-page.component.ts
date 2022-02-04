import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../services/document/document.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as showdown from 'showdown';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-document-update-page',
  templateUrl: './document-update-page.component.html',
  styleUrls: ['./document-update-page.component.scss'],
})
export class DocumentUpdatePageComponent implements OnInit {
  Document: any;
  form: any;
  test!: number;
  test2!:number;
  converter: any;
  liste:any;

  @HostListener("input", ["$event.target.value"])
  onInput(value: any) {
    this.up()

  }
  
  
  constructor(
    public DocumentService: DocumentService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.form = {
      nom: '',
      description: '',
    };
  }
  update(ident : number , id:number): void {

    this.DocumentService.getListe(ident);

    this.DocumentService.updateDocument(this.form,ident);
  
    this.router.navigate(['/document/'+ident]);
  }

  up(){

    var test = new showdown.Converter();
    this.converter= test.makeHtml(this.form.description);

  }

  reset(): void {
    this.form = { ...this.Document };
    this.up()
  }
  ngOnInit(): void {
    let id: any;
    let ident :any;
    this.route.params.subscribe((params) => (id = params['id']));
    this.route.params.subscribe((params) => (ident = params['ident']));
    this.liste=this.DocumentService.getListe(ident);
    
    //id du document
    this.test=id;

    //id du carnet
    this.test2=ident;
    this.Document = this.DocumentService.getDocumentById(id);
    this.form = { ...this.Document };
    var test = new showdown.Converter();
    this.converter= test.makeHtml(this.form.description);
   
    console.log("test");
    console.log(this.liste);
  }
 
  
  
}
