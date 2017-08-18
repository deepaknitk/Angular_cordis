import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent {
  flag=true;
  constructor(private router:Router) { }
   detail_form(){
   this.flag=false;
  this.router.navigate(['ContactDetailsComponent']);
   }
}
