import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.deletedata()
  }

  deletedata(){
    let id = this.route.snapshot.paramMap.get('id');
    return this.employeeService.deleteData(id).subscribe((result) => {
      this.router.navigate(["/"])
    })
  }

}
