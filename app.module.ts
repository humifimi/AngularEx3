import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {my_Route} from './app.route';
import { AppComponent } from './app.component';
import { StudentCompComponent } from './student-comp.component';
import { HomeCompComponent } from './home-comp.component';
import { StudentViewCompComponent } from './student-view-comp.component';
import { MyPipePipe } from './my-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentCompComponent,
    HomeCompComponent,
    StudentViewCompComponent,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    my_Route
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
