import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntityListComponent } from './entity-list/entity-list.component';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReplaceComponent } from './replace/replace.component';



const appRoutes: Routes =[
   { path: 'replace',
     component:ReplaceComponent
   }
 ];

@NgModule({
  declarations: [
    AppComponent,
    EntityListComponent,
    PageNotFoundComponent,
    ReplaceComponent
  ],
  imports: [
  RouterModule.forRoot(appRoutes),
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
