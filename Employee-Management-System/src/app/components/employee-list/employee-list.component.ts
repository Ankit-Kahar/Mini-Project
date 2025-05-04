import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule, DatePipe } from '@angular/common';
import { Employee } from '../../models/employee';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule, FormsModule, DatePipe, RouterModule, RouterOutlet],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  search!: string;

  eService = inject(EmployeeService);

  currentPage = 1;

  searchEmp() {
    this.currentPage = 1
    this.eService.findEmp(this.search);
  }

  goToNext() {
    this.currentPage++;
  }

  goToPrevious() {
    this.currentPage--;
  }

  get employees() {
    return this.eService.findPaginatedData(this.eService.empDataList, this.currentPage)
  }

  get lastPage() {
    return this.eService.lastPage
  }


  deleteEmp(empId: number) {
    this.eService.deleteEmployee(empId);
    this.employees;
  }
}
