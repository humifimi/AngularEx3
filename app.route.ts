import {Routes, RouterModule} from "@angular/router";
import {StudentCompComponent} from "./student-comp.component";
import {HomeCompComponent} from "./home-comp.component";
import {StudentViewCompComponent} from './student-view-comp.component';

const myRoutes : Routes = [
    {path : '' , redirectTo : 'home' , pathMatch:'full' },
    {path : 'home' , component : HomeCompComponent},
    {path : 'student' , component : StudentCompComponent},
    {path: 'student/view' , component : StudentViewCompComponent} 
    
    
];

export const my_Route =  RouterModule.forRoot(myRoutes);