import { Routes } from '@angular/router';
import { AssignProjectComponent } from './components/assign-project/assign-project.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';

export const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent
},
{
    path: 'employees',
    component: EmployeeListComponent
},
{
    path: 'employees/new',
    component: NewEmployeeComponent
},
{
    path: 'employees/:id/edit',
    component: NewEmployeeComponent
},
{
    path: 'employees/:id',
    component: EmployeeInfoComponent
},
{
    path: 'employees/:id/profile',
    component: ProfileInfoComponent
},
{
    path: 'employees/:id/project',
    component: AssignProjectComponent
},
];
