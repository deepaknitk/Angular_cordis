import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent {
  flag=true;
  constructor() { }
   detail_form(){
   this.flag=false;
  //this.Router.navigate([ContactDetailsComponent]);
   }

}
