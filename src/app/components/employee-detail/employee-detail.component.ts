import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {


  employee: any = Employee;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployeeId()
  }

  getEmployeeId(){
    let id = this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployeeByid(id).subscribe((data) => {
      this.employee = data;
    })
  }

  getBack(){
    this.router.navigate(["/"])
  }


}
