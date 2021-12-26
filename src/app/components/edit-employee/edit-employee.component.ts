import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from 'src/app/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {


  employee: any = Employee;

  editEmployee = new FormGroup({
    name: new FormControl(''),
    location: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl('')
  })


  constructor(private employeeService: EmployeeService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    let id = this.route.snapshot.paramMap.get('id');
    return this.employeeService.getData(id).subscribe((result: any) => {
      
      this.editEmployee = new FormGroup({
        name: new FormControl(result['name']),
        location: new FormControl(result['location']),
        email: new FormControl(result['email']),
        mobile: new FormControl(result['mobile'])
      })
    })
  }

  updateData(){
    console.log(this.editEmployee.value)
//    let id = this.route.snapshot.paramMap.get('id');
    this.employeeService.updateEmployeeData(this.route.snapshot.params['id'], this.editEmployee.value).subscribe((result) =>{
      this.router.navigate(["/"])
    })
 //   this.employeeService.updateEmployeeData(this.router.snapshot.Params.id, this.editEmployee.value)
  }

}
