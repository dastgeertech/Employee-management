import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {


  employees: Employee[] = []

  addEmployee= new FormGroup({
    name: new FormControl(''),
    location: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl('')
  })


  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  addData(){
    this.employeeService.addEmployee(this.addEmployee.value).subscribe((result) =>{
      this.employees.push(result)
//      console.log('Data Added Successfully', result)
    });
    this.router.navigate(["/"]);
  }

}
