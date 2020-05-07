import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../service/project.service';
import { Project } from '../models/projects.model';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private projectService: ProjectService, private employeeService: EmployeeService, private route: ActivatedRoute) { }

  project: Project = new Project({});
  productOwners: Employee[] = [];
  employees: Employee[] = [];

  ngOnInit(): void {
    this.getProject();
  }
  getProject(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.projectService.getProjectById(projectId).subscribe((data: any) => {
      this.project = new Project(data);
      this.employeeService.getEmployeesWithArrayOfIds(data.productOwners).subscribe((owners: any) => {
        owners.forEach(owner => {
          this.productOwners.push(new Employee(owner));
        });

      });

    });
    this.employeeService.getEmployeesByProjectId(projectId).subscribe((data: any) => {
      data.forEach(employee => {
        let isOwner = false;
        for (const owner of this.productOwners) {
          if (employee.id !== owner.id) {
            isOwner = true;
            break;
          }
        }
        if (!isOwner) this.employees.push(new Employee(employee));
      });
    });

  }

}
