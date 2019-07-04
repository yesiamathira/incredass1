import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../employee.service';
import { Router, Route } from '@angular/router'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
show;
  constructor(private employeeservice:EmployeeService,private route : Router) { }

  ngOnInit() {
    this.employeeservice.currentlogInStatus.subscribe((a)=>this.show=a)
  }

logOut(){
  this.employeeservice.updateLoginStatus(false);
this.route.navigate(['/login']);
}
}
