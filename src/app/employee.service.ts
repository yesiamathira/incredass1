import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private logInStatus=new BehaviorSubject(false);
  currentlogInStatus=this.logInStatus.asObservable();
employee:{name:string,team:string,age:number,email:string};
  
employees=[{
  
  "name":"manjunath",
  "team":"Front End",
  "age":10,
  "email":"manjunath@incred.com"
},
{
  "name":"gaurav",
  "team":"Front End",
  "age":11,
  "email":"gaurav@incred.com"
},
{
  "name":"amal",
  "team":"Front End",
  "age":12,
  "email":"amal@incred.com"
},
{
  "name":"upendra",
  "team":"Front End",
  "age":9,
  "email":"upendra@incred.com"
},
{
  "name":"nitish",
  "team":"Front End",
  "age":11,
  "email":"nitish@incred.com"
},
{
  "name":"ubed",
  "team":"Front End",
  "age":18,
  "email":"ubed@incred.com"
},
{
  "name":"sumit",
  "team":"Back End",
  "age":18,
  "email":"sumit@incred.com"
},
{
  "name":"kartikeya",
  "team":"Back End",
  "age":13,
  "email":"kartikeya@incred.com"
},
{
  "name":"amit",
  "team":"Back End",
  "age":15,
  "email":"amit@incred.com"
},
{
  "name":"anil",
  "team":"Back End",
  "age":17,
  "email":"anil@incred.com"
},
{
  "name":"linto",
  "team":"back End",
  "age":31,
  "email":"linto@incred.com"
}
]

  constructor(private http : HttpClient) { }

getEmployees(){
  return this.employees;
}

updateLoginStatus(value:boolean){
  this.logInStatus.next(value);
}

getEmployeeByName(name){
  return this.employees.find((ele)=> ele.name == name);
}

addEmployee(employee){
this.employees.push(employee);
}
}
