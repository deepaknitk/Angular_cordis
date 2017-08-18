import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntityListComponent } from './entity-list/entity-list.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AlertModule } from 'ngx-bootstrap';
//import {ToolTipModule} from 'angular2-tooltip';
//import {Routes, RouterModule} from "@angular/router";
import { ContactDetailsComponent } from './contact-details/contact-details.component';





@NgModule({
  declarations: [
    AppComponent,
    EntityListComponent,
    HomeComponent,
    HeaderComponent,
    ContactDetailsComponent
  ],
  imports: [
   //ToolTipModule,
  AlertModule.forRoot(),
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
