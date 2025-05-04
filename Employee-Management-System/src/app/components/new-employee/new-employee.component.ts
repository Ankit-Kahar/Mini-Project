import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-new-employee',
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent {
  employeeForm!: FormGroup
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  id: number = 0

  es = inject(EmployeeService)

  constructor() {
    this.employeeForm = new FormGroup({
      empId: new FormControl('', Validators.required),
      empName: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
      joiningDate: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNo: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
      empCity: new FormControl('', Validators.required)
    })

    this.route.paramMap.subscribe(params => {

      this.id = Number(params.get('id'));
      console.log(this.id)

      let editEmp = this.es.getEmployeeById(this.id)
      console.log(editEmp)

      this.employeeForm.setValue({
        empId: editEmp?.empId,
        empName: editEmp?.empName,
        position: editEmp?.position,
        joiningDate: editEmp?.joiningDate,
        status: editEmp?.status,
        email: editEmp?.email,
        phoneNo: editEmp?.phoneNo,
        empCity: editEmp?.empCity
      })

    })

  }

  addEmployee() {

    console.log(this.employeeForm.value)
    this.es.addEmployee(this.employeeForm.value)
    alert("Employee Added SuccessFully!")


    console.log(this.employeeForm.value.empId)

    let id = this.employeeForm.value.empId
    console.log(id);


    this.router.navigate([`employees/${id}`])
  }

  editEmployee(id: number) {
    console.log(id)
    this.es.editEmployeeData(this.employeeForm.value)
    this.router.navigate([`employees/${id}`])
  }
}
