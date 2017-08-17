import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.css']
})


export class EntityListComponent{
constructor( private router:Router){}
name="dfdff";
  detailsFlag=true;
   showDetails(){
     this.detailsFlag=false;
     console.log("function calling........")
     this.router.navigate(['/replace']);
     console.log("after navigate")
   }
}
