import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../employee.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // employee:{name:string,team:string,age:number,email:string}={name:"aditya", team:'IT', age:12, email:'string email'};
  employees=this.employeeservice.getEmployees();
  myForm;
   
  constructor(private employeeservice:EmployeeService,private fb:FormBuilder) { }


  addEmployee(data){
this.employeeservice.addEmployee(data);
this.employeeservice.getEmployees();
console.log(this.employeeservice.getEmployees())
  }
  ngOnInit() {
  
  console.log(this.employeeservice.getEmployees());
  this.myForm = this.fb.group({
    email: ['', Validators.compose([Validators.required,Validators.email])],
    team: '',
    name:'',
    age:''
  });
  }
  

}
