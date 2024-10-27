import { Component } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  employee: Employee = {
    firstName: '',
    lastName: '',
    email: 's'
  };
  submitted = false;

  constructor(private employeeService: EmployeeService) { }

  saveEmployee(): void {
    const data = {
      firstName: this.employee.firstName,
      lastName: this.employee.lastName,
      email: this.employee.email
    };

    this.employeeService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = {
      firstName: '',
      lastName: '',
      email: ''
    };
  }

}