import { Team } from './team.model';

export class Department {
    name: string;
    desc: string;
    id: string;
    constructor({name, desc, id, teams}:any) {
      this.name = name;
      this.desc = desc;
      this.id = id;
    }
  
    fullName() {
      return this.name;
    }
}
