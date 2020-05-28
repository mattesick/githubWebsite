export class Employee {
    id:string;
    name: string;
    lastName: string;
    skills: string;
    role: string;
    projects: string;
    technologies:number[];
    projectRole:string;
    constructor({name, lastName, skills, role, projects, id, technologies, projectRole}:any){
      this.name = name;
      this.lastName = lastName;
      this.skills = skills;
      this.role = role;
      this.projects = projects;
      this.id = id;
      this.technologies = technologies;
      this.projectRole = projectRole;
    }
  
    fullName() {
      return this.name + " " + this.lastName;
    }
}
