import { Injectable, inject } from '@angular/core';
import { Employee } from '../models/employee';
import { employeeData } from '../data/employee-data';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeList: Employee[] = [];
  searchText = "";

  constructor(private route: ActivatedRoute) {
    this.employeeList = employeeData;
  }

  get empDataList() {
    if (this.searchText !== "") {
      return this.findEmp(this.searchText);
    }

    return this.employeeList;
  }

  findEmp(searchText: string) {
    this.searchText = searchText;
    const status = searchText == "Active" ? true : false;
    return this.employeeList.filter((e) =>
      e.position.toLowerCase().includes(searchText) || e.status === status
    );
  }

  addEmployee(emp: Employee) {
    let em: Employee = {
      empId: emp.empId,
      empName: emp.empName,
      position: emp.position,
      joiningDate: new Date(emp.joiningDate),
      status: emp.status,
      email: emp.email,
      phoneNo: emp.phoneNo,
      empCity: emp.empCity,
      projects: []
    }
    this.employeeList.push(em)
    this.findPaginatedData(this.employeeList, 1);
  }

  getEmployeeById(id: number) {
    return this.employeeList.find((e) => e.empId == id)
  }

  editEmployeeData(emp: Employee) {
    console.log(emp)

    let editEmp = this.getEmployeeById(emp.empId)
    console.log(editEmp)

    if (editEmp) {
      editEmp.empId = emp.empId
      editEmp.empName = emp.empName
      editEmp.position = emp.position
      editEmp.joiningDate = emp.joiningDate
      editEmp.status = emp.status
      editEmp.email = emp.email
      editEmp.phoneNo = emp.phoneNo
      editEmp.empCity = emp.empCity
    }
  }

  findPaginatedData(emps: Employee[], page: number) {
    return emps.filter((p: Employee, index) => (index < (page) * 5) && index >= (page - 1) * 5);
  }

  deleteEmployee(empId: number) {
    if (confirm('Are you sure you want to delete the employee')) {
      this.employeeList.splice(empId, 1);
    }
  }

  get lastPage() {
    if (this.employeeList.length % 5 === 0)
      return Math.floor(this.employeeList.length / 5);
    return Math.floor(this.employeeList.length / 5) + 1;
  }

}
