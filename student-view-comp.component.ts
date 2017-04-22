import { Component, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription } from 'rxjs/Rx';
import {ServiceDbService} from './service-db.service';
import {MyPipePipe} from './my-pipe.pipe';


@Component({
  selector: 'app-student-view-comp',
  template: `
    <p>
      
      Student ID : {{id}}
   </p>
      <div *ngIf = data > {{data.name}} | {{data.email}}
       </div>

   

  `,
  styles: [],
  providers:[ServiceDbService]
})
export class StudentViewCompComponent implements OnDestroy {
  subcription : Subscription;
  data : Object;
  
  id : string ;
  constructor(private route : ActivatedRoute , private  serviceDb : ServiceDbService ) {
    this.subcription = this.route.queryParams.subscribe(
      (param : any) => this.id = param['id']
    );
    //this.data = this.serviceDb.getData();
    this.data = this.serviceDb.getDataById(this.id);
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

}
