import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  employee:{name:string,team:string,age:number,email:string};
  employees=this.employeeservice.getEmployees();
  status
  constructor(private employeeservice:EmployeeService,private router :Router) { }

  ngOnInit() {
    this.employeeservice.currentlogInStatus.subscribe((s)=> this.status=s)
    console.log(this.status)
    if(!this.status){
      this.router.navigate(['/login'])
    }
  }
  onEdit(name:string)
  {
    this.router.navigate(['/editemployee',name]);
  }
}
