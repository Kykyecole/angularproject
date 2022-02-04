import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CarnetPageComponent } from './carnet-page/carnet-page.component';
import { CarnetAddPageComponent } from './carnet-add-page/carnet-add-page.component';
import { CarnetUpdatePageComponent } from './carnet-update-page/carnet-update-page.component';
import { DocumentPageComponent } from './document-page/document-page.component';
import { DocumentAddPageComponent } from './document-add-page/document-add-page.component';
import { DocumentUpdatePageComponent } from './document-update-page/document-update-page.component';
import { DocumentViewPageComponent } from './document-view-page/document-view-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'carnet', component: CarnetPageComponent },
  { path: 'carnet/add', component: CarnetAddPageComponent },
  { path: 'carnet/update/:id', component: CarnetUpdatePageComponent },
  { path: 'document/:id', component: DocumentPageComponent },
  { path: 'document/add/:id', component: DocumentAddPageComponent },
  { path: 'document/update/:ident/:id', component: DocumentUpdatePageComponent },
  { path: 'document/view/:ident/:id', component: DocumentViewPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
