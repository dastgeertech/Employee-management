import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  Url = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }


  addPaginationParams(page: any, size: any, params: URLSearchParams ): URLSearchParams {
    if (!params) {
      params = new URLSearchParams();
    }
    params.set('pageSize', String(size));
    params.set('pageNo', String(page));
    return params;
  }




  getEmployee(){
    let apiUrl = this.Url
    return this.http.get(apiUrl);
  }

  getEmployeeByid(id: any){
    let idUrl= `${this.Url}/${id}`
    return this.http.get(idUrl)
  }

  getData(id: any){
    let getData = `${this.Url}/${id}`
    return this.http.get(getData);
  }

  updateEmployeeData(id: number, data: any){
    return this.http.put(`${this.Url}/${id}`, data)
  }


  addEmployee(data: any){
    return this.http.post(`${this.Url}`, data)
  }

  deleteData(id: any){
    let getData = `${this.Url}/${id}`
    return this.http.delete(getData);
  }

}
