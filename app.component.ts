import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2>Welcome</h2>
  <hr>
  <div> <a [routerLink] = "['home']">Homepage</a>
  | <a [routerLink] = "['student']" > Student </a> </div>
  <hr>
  <router-outlet></router-outlet>
  `
  
})
export class AppComponent {
  title = 'app works!';
}
