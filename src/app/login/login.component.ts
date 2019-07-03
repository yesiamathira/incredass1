import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService} from '../employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  myForm: FormGroup;
   data = {email:"",team:""};
  employees=this.employeeservice.getEmployees();
  constructor(private router: Router,private employeeservice:EmployeeService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl(''),
      team: new FormControl('')
      
    });
  
  
  }
  doLogin(data){
    for(var i=0;i<this.employees.length;i++){
      if((data.email===this.employees[i].email)&&(data.team===this.employees[i].team)){
        this.router.navigate(['/employeedetails']);
      }
    else{
      console.log("Login Failed");
    }
    }
  }
}
