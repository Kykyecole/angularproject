import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentAddPageComponent } from './document-add-page.component';

describe('DocumentAddPageComponent', () => {
  let component: DocumentAddPageComponent;
  let fixture: ComponentFixture<DocumentAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentAddPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
