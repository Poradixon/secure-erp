import { Component, OnInit } from '@angular/core';
import {Hr} from '../../models/classes/Employees/hr';

class Employee {
  hrEmployee: Hr;
}

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.scss']
})
export class HrComponent implements OnInit {
  employees: Employee[] = [];

  constructor() { }

  ngOnInit(): void {
  this.showEmployees();
  }

  showEmployees(): void {
    
  }
}
