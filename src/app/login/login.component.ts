import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService} from '../employee.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  myForm: FormGroup;
  //  data = {email:"",team:""};
  employees=this.employeeservice.getEmployees();
  constructor(private router: Router,private employeeservice:EmployeeService,private fb:FormBuilder) { }
  
  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      team: ['',Validators.required]
    });
  
  
  }
  doLogin(){
    // const emp = this.employees.find( e => e.email === this.myForm.value.email)
    // if(emp){
    //   this.router.navigate(['/employeedetails']);
    // }
    // else{
    //   alert("Employee not found");
    //   }
    const data = this.myForm.value;

// this.employees.forEach((e,i) => {
//   console.log(e,i)

// })
    // for(const emp of this.employees){
    //   if(emp.email === data.email){
    //     alert("Emp exist");
    //   }else{
    //   alert("Employee not found");

    //   }
    // }


    for(var i=0;i<this.employees.length;i++){
      if((data.email===this.employees[i].email)&&(data.team===this.employees[i].team)){
       
        this.employeeservice.updateLoginStatus(true);
        this.router.navigate(['/employeedetails']);
      }
    else{
      console.log("Login Failed");
    }
    }
  }
}
