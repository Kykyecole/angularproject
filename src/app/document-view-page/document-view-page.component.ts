import { Component, OnInit } from '@angular/core';
//import { DocumentUpdatePageComponent } from '../document-update-page/document-update-page.component';
import { Router, ActivatedRoute } from '@angular/router';
import * as showdown from 'showdown';
import { DocumentService } from '../services/document/document.service';

@Component({
  selector: 'app-document-view-page',
  templateUrl: './document-view-page.component.html',
  styleUrls: ['./document-view-page.component.scss']
})
export class DocumentViewPageComponent implements OnInit {
  Document: any;
  converter:any;
  
  constructor(
    //public DocumentUpdatePageComponent: DocumentUpdatePageComponent,
    public DocumentService: DocumentService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    
  }

  ngOnInit(): void {
    let id: any;
    let ident :any;
    this.route.params.subscribe((params) => (id = params['id']));
    this.route.params.subscribe((params) => (ident = params['ident']));
    this.DocumentService.getListe(id);
    this.Document = this.DocumentService.getDocumentById(id);
    var test = new showdown.Converter();
    this.converter= test.makeHtml(this.Document.description);
  }
  
}
