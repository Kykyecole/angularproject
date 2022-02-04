import { Component, Input, OnInit } from '@angular/core';
import { DocumentService } from '../services/document/document.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CarnetService } from '../services/carnet/carnet.service';

@Component({
  selector: 'app-Document-page',
  templateUrl: './Document-page.component.html',
  styleUrls: ['./Document-page.component.scss'],
})

export class DocumentPageComponent implements OnInit {
  liste: any;
  Document: any;
  form: any;
  titres!: any;
  test!: number;

  @Input() search!: string;

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
    this.search=""
  }
  

  ngOnInit(): void {
    
    let id: any;
    this.route.params.subscribe((params) => (id = params['id']));
    this.titres =this.CarnetService.getCarnetById(id);
    this.test = id;
    this.liste=this.DocumentService.getListe(this.test);

    console.log("test2")
    console.log(this.liste);
   }

  delete(id: number,id2:number) {
    let res = confirm('Etes-vous sûr de vouloir supprimer le document ? ');
    if (res) this.DocumentService.deleteDocument(id,id2);
  }
  

}





