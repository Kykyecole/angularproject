import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarnetPageComponent } from './carnet-page/carnet-page.component';
import { TitreComponent } from './titre/titre.component';
import { CarnetAddPageComponent } from './carnet-add-page/carnet-add-page.component';
import { FormsModule } from '@angular/forms';
import { CarnetUpdatePageComponent } from './carnet-update-page/carnet-update-page.component';

import { DocumentPageComponent } from './document-page/document-page.component';
import { DocumentAddPageComponent } from './document-add-page/document-add-page.component';
import { DocumentUpdatePageComponent } from './document-update-page/document-update-page.component';
import { SearchPipe } from './search.pipe';
import { ShowdownModule } from 'ngx-showdown';
import { DocumentViewPageComponent } from './document-view-page/document-view-page.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    CarnetPageComponent,
    TitreComponent,
    CarnetAddPageComponent,
    CarnetUpdatePageComponent,
    DocumentPageComponent,
    DocumentAddPageComponent,
    DocumentUpdatePageComponent,
    SearchPipe,
    DocumentViewPageComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ShowdownModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
