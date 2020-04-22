import { Employee } from './employee.model';

export class Team {
    initEmployees: Function
    name: string;
    desc: string;
    id: string;
    employees: Employee[];
    constructor({name, desc, id, employees}:any) {
      this.name = name;
      this.desc = desc;
      this.id = id;
      this.initEmployees = () => {
        this.employees = [];
        if(employees){
          employees.forEach(employee => {
            this.employees.push(new Employee(employee));
          });
        }
      }
      this.initEmployees();
    }
  
    fullName() {
      return this.name;
    }
}
