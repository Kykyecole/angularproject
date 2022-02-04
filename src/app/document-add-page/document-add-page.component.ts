import { Component, HostListener, OnInit } from '@angular/core';
import { DocumentService } from '../services/document/document.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CarnetService } from '../services/carnet/carnet.service';
import * as showdown from 'showdown';

@Component({
  selector: 'app-document-add-page',
  templateUrl: './document-add-page.component.html',
  styleUrls: ['./document-add-page.component.scss'],
})
export class DocumentAddPageComponent implements OnInit {
  liste: any;
  Document: any;
  form: any;
  titres!: any;
  test!: number;
  test2: any;
  converter!: string;
  constructor(
    public DocumentService: DocumentService,
    public CarnetService :CarnetService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.form = {
      nom: '',
      description: '',
    };
  }

  @HostListener("input", ["$event.target.value"])
  onInput(value: any) {
    this.up()

  }

  add(id: number): void {
    this.DocumentService.addDocument(this.form,id);
    this.router.navigate(['/document/'+id]);
  }
  up(){

    var test = new showdown.Converter();
    this.converter= test.makeHtml(this.form.description);

  }
  reset(): void {
    this.form = {
      nom: '',
      description: '',
    };
  }


    ngOnInit(): void {
      let id: any;
      let ident :any;
      this.route.params.subscribe((params) => (id = params['id']));
      this.route.params.subscribe((params) => (ident = params['ident']));
      this.titres =this.CarnetService.getCarnetById(id);
      this.DocumentService.getListe(id);
      this.test=id;
      this.test2=ident;
      this.liste=this.DocumentService.getListe(id);
      this.Document = this.DocumentService.getDocumentById(id);
      this.form = { ...this.Document };
      var test = new showdown.Converter();
      this.converter= test.makeHtml(this.form.description);
   
  
      console.log(this.form);
    }


    ngOnload() :void {

      let id: any;
      this.route.params.subscribe((params) => (id = params['id']));
      this.liste=this.DocumentService.getListe(id);
      console.log("test");
    
    }

    

  }
  

