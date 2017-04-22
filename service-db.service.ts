import { Injectable } from '@angular/core';

@Injectable()
export class ServiceDbService {
 
  data : [{id : string , name : string , email : string}] = [
    {id : '1' , name : 'Asaad Saad' , email : 'asaad@mum.edu'},
    {id : '2' , name : 'Humaira Faheem' , email : 'humifimi@gmail.com'}
  ];

  constructor() { 
  }
  getDataById(val) : Object {
   
    for(let d of this.data){
      if(d.id == val){
     //  console.log(d + " | " + val);
        return d;
      }
    }
    return null;
  }
  getData()  {
    return this.data;
  }

}
