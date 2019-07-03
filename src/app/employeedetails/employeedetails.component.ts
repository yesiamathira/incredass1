import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  employee:{name:string,team:string,age:number,email:string};
  employees=this.employeeservice.getEmployees();
  
  constructor(private employeeservice:EmployeeService) { }

  ngOnInit() {
  }

}
