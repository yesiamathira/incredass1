import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../employee.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // employee:{name:string,team:string,age:number,email:string}={name:"aditya", team:'IT', age:12, email:'string email'};
  employees=this.employeeservice.getEmployees();
  constructor(private employeeservice:EmployeeService) { }


  addEmployee(emp){
this.employeeservice.addEmployee(emp);
this.employeeservice.getEmployees();
console.log(this.employeeservice.getEmployees())
  }
  ngOnInit() {
  
  console.log(this.employeeservice.getEmployees())
  }


}
