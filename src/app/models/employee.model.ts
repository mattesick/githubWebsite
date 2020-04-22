export class Employee {
    id:string;
    name: string;
    lastName: string;
    skills: string;
    role: string;
    projects: string;
    constructor({name, lastName, skills, role, projects, id}:any){
      this.name = name;
      this.lastName = lastName;
      this.skills = skills;
      this.role = role;
      this.projects = projects;
      this.id = id;
    }
  
    fullName() {
      return this.name + " " + this.lastName;
    }
}
