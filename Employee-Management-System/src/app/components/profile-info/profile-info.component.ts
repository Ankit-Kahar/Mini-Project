import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile-info',
  imports: [DatePipe],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css'
})
export class ProfileInfoComponent {
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
