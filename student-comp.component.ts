import { Component, OnInit } from '@angular/core';
import {ServiceDbService} from './service-db.service';

@Component({
  selector: 'studentComp',
  template: `
    <h2>Student Information</h2>
    <ul>
      <li *ngFor = "let item of serviceDb.getData()">
      <a [routerLink] = "['view']" [queryParams] = "{id : item.id }"> 
      {{item.name}} </a>
      </li>
        <router-outlet></router-outlet>
    </ul>
  `,
  styles: [],
  providers:[ServiceDbService]
})
export class StudentCompComponent implements OnInit {

  items : [Object];
  constructor(private serviceDb : ServiceDbService) { 
   // this.items = serviceDb.getData;
 }

  ngOnInit() {
  }

}
