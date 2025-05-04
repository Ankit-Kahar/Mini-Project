import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-assign-project',
  imports: [DatePipe, CommonModule],
  templateUrl: './assign-project.component.html',
  styleUrl: './assign-project.component.css'
})
export class AssignProjectComponent {
  id!: number;

  private eService = inject(EmployeeService);

  employee!: Employee;

  constructor(private route: ActivatedRoute) {
    route.paramMap.subscribe(p => this.id = Number(p.get('id')))
    console.log(this.employee);

    this.employee = this.eService.empDataList.find(e => e.empId === this.id)!;
    console.log(this.employee);

  }

}
