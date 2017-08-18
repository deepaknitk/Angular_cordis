import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntityListComponent } from './entity-list/entity-list.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AlertModule } from 'ngx-bootstrap';
//import {ToolTipModule} from 'angular2-tooltip';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'contactDetails', component: ContactDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EntityListComponent,
    HomeComponent,
    HeaderComponent,
    ContactDetailsComponent
  ],
  imports: [
  RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
   ),
   //ToolTipModule,
  AlertModule.forRoot(),
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
