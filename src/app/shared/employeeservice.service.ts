import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';


import {Employee} from "./employee.model";
@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  //insert and update 
  selectedEmployee:Employee;
  //retriving records
  employees:Employee[];
  readonly baseURL = 'http://localhost:3000/employees';

  constructor(public http: HttpClient) { }

  postEmployee(emp: Employee) {
    return this.http.post(this.baseURL, emp);
  }

  getEmployeeList() {
    return this.http.get(this.baseURL);
  }

  putEmployee(emp: Employee) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
