
class Database {
  constructor(json) {
    this.JSONdata = json;
  }
  getDepartmentById(id) {
    for (const department of this.JSONdata.departments) {
      if (department.id == id) return department;
    }
  }
  getPersonsWithArrayOfIds(array) {
    let persons = [];
    for (const person of this.JSONdata.persons) {
      for (const personId of array) {
        if (person.id == personId) persons.push(person);
        if (persons.length == array.length) break;
      }
    }
    return persons;
  }
  getTeamById(id) {
    for (const team of this.JSONdata.teams) {
      if (team.id == id) return team;
    }
  }
  getTeamByPersonId(id) {
    for (const team of this.JSONdata.teams) {
      for (const personId of team.persons) {
        if (personId == id) return team;
      }
    }
  }
  getPersonById(id) {
    for (const person of this.JSONdata.persons) {
      if (person.id == id) return person;
    }
  }
  getTechnologyByName(name) {
    for (const technology of this.JSONdata.technologies) {
      if (technology.name == name) return technology;
    }
  }
  getTechnologyById(id) {
    for (const technology of this.JSONdata.technologies) {
      if (technology.id == id) return technology;
    }
  }
  getPersonsByTechnology(technology) {
    let result = [];
    let technologyId = this.getTechnologyByName(technology).id;

    for (const person of JSONdata.persons) {
      for (const techId of person.technologies) {
        if (techId == technologyId) result.push(person);
      }
    }

    return result;
  }
  getRoleById(id){
    for (const role of this.JSONdata.roles) {
        if(role.id == id) return role;
    }
  }
  getPersonsByProjectId(id) {
    let result = [];
    for (const person of this.JSONdata.persons) {
      for (const project of person.projects) {
        if (project[0] == id) {result.push(person);}
      }
    }
    result.forEach(person => {
      let currentProject;
      for (const project of person.projects) {
          if(project[0] == id) {currentProject = project; break;}
      }
      person.projectRole = this.getRoleById(currentProject[1]).name;
    });
    return result;
  }
  getAllDepartments(){
    return this.JSONdata.departments;
  }
  getProjectsByPersonId(id){
    let person = this.getPersonById(id);

    let personProjects = [];
    for (const personProject of person.projects) {
        personProjects.push(this.getProjectById(personProject[0]));
    }
    return personProjects;
    
  }
  getProjectById(id){
    for (const project of this.JSONdata.projects) {
      if(id == project.id) return project;
    }
  }
  getFirstXProjects(x){
    let arr = [];
    for (let i = this.JSONdata.projects.length - 1; i >= (this.JSONdata.projects.length) - x; i--) {
      arr.push(this.JSONdata.projects[i]);
    }
    return arr;
  }
  getAllTeams(){
    return this.JSONdata.teams;
  }
  getAllProjects(){
    return this.JSONdata.projects;
  }
  getPersonTechnologiesByPersonId(id){
    let person = this.getPersonById(id);
    let result = [];
    for (const techonologyId of person.technologies) {
      result.push(this.getTechnologyById(techonologyId));
    }
    return result;
  }
  search(query){
    let result = {};
    for (const key in this.JSONdata) {
      result[key] = [];
      if (this.JSONdata.hasOwnProperty(key)) {
        const element = this.JSONdata[key];
        for (const a in element) {
          for (const prop in element[a]) {
            let checkString = typeof element[a][prop] == "string" ? element[a][prop].toLowerCase().split("").splice(0, query.length).join("") : undefined;
            if(typeof element[a][prop] == "string" && checkString == query.toLowerCase()) {
              result[key].push(element[a]); break;
            }
          }
        }
        for (const a in element) {
          for (const prop in element[a]) {
            if(typeof element[a][prop] == "string" && element[a][prop].toLowerCase().includes(query.toLowerCase())) {
              let should = true;
              for (const prop of result[key]) {
                if(prop == element[a].id) should = false;;
              }
              if(should)result[key].push(element[a]);
              break;
            }
          }
        }
        
      }
    }
    return result
  }
}
module.exports = { Database };

