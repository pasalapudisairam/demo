import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import { LoginComponent } from "./login/login.component";
import { DashbordComponent } from "./dashbord/dashbord.component";

const routes: Routes = [  
  { path: '', redirectTo: '/LoginPage', pathMatch: 'full' },
  { path: 'LoginPage',component:LoginComponent },
  { path: 'Registerpage',component:RegisterComponent },
  { path: 'dashbord',component:DashbordComponent }
  
];
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
