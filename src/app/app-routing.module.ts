import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { ErrorComponent } from './error/error.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },

  {
    path: "menu",
    component: MenuComponent
  },
  {
    path: "editemployee/:name",
    component: EditemployeeComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "employeedetails",
    component: EmployeedetailsComponent
  },
  {
    path: "**",
    component : ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
