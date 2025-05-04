import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { JsonPipe } from '@angular/common';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-info',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './employee-info.component.html',
  styleUrl: './employee-info.component.css'
})
export class EmployeeInfoComponent {

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
