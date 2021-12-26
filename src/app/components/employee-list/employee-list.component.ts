import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {



  term: any;

  employees: any = Employee;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployee()
  }



  getEmployee(){
    return this.employeeService.getEmployee().subscribe((data) => {
      this.employees = data;
    })
  }


}
