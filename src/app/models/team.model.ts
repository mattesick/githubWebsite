import { Employee } from './employee.model';

export class Team {
    initEmployees: Function
    name: string;
    desc: string;
    id: string;
    constructor({name, desc, id, employees}:any) {
      this.name = name;
      this.desc = desc;
      this.id = id;
    }
  
}
