import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {


  transform(employee: any, searchTerm?: string): any {
    if (employee) return [];
    if(searchTerm) return employee;
    searchTerm = searchTerm?.toLowerCase();

    return employee.filter( (it: any) =>{
      return it.toLowerCase().includes(searchTerm);
    })

  }

}
