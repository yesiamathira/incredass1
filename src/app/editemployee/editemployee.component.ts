import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../employee.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  name: string;
  private sub: any;
  employee:any;
  status
  constructor(private employeeservice:EmployeeService,private Paramroute: ActivatedRoute,private router :Router) { }

  ngOnInit() {
    this.employeeservice.currentlogInStatus.subscribe((res)=>this.status=res)
    if(!this.status){
      this.router.navigate(['/login'])
    }
  this.employeeservice.getEmployees();
  const name=this.Paramroute.snapshot.params['name'];

    this.employee=this.employeeservice.getEmployeeByName(name);
    console.log(this.employee)
  }
}
