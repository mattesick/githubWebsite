
const express = require('express');
const app = express();


const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const fs = require("fs");


//Cookie secret
app.use(cookieSession({
  secret: "adjsoaiuhdiaphfisdhfiosdahfisadhifhasdifhasdpiufhasoih"
}));
app.use(bodyParser.json())

const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
let json;
let projects;

fs.readFile('person.json', (err, data) => {
  if (err) throw err;
  json = JSON.parse(data);
});
fs.readFile('projects.json', (err, data) => {
  if (err) throw err;
  projects = JSON.parse(data);
});

app.get("/getDepartmentById/:id", (req, res) => {
  for (const department of json) {
    if (department.id == req.params.id) return res.send(department);
  }
});

app.get("/getEmployeesWithArrayOfIds/:array", (req, res) => {
  req.params.array = JSON.parse(req.params.array);
  let employees = [];
  for (const department of json) {
    for (const team of department.teams) {
      for (const employee of team.employees) {
        for (const employeeId of req.params.array) {
          if (employee.id == employeeId) employees.push(employee);
          if(employees.length == req.params.array.length) break;
        }
      }
    }
  }
  return res.send(employees);
});

app.get("/getTeamById/:id", (req, res) => {
  for (const department of json) {
    for (const team of department.teams) {
      if (team.id == req.params.id) return res.send(team);
    }
  }
});

app.get("/getTeamByEmployeeId/:id", (req, res) => {
  for (const department of json) {
    for (const team of department.teams) {
      for (const employee of team.employees) {
        if (employee.id == req.params.id) return res.send(team);
      }
    }
  }
});

app.get("/getEmployeeById/:id", (req, res) => {
  for (const department of json) {
    for (const team of department.teams) {
      for (const employee of team.employees) {
        if (employee.id == req.params.id) return res.send(employee);
      }
    }
  }
});

app.get("/getEmployeesBySkill/:skill", (req, res) => {
  let result = [];
  for (const department of json) {
    for (const team of department.teams) {
      for (const employee of team.employees) {
        if (employee.skills == req.params.skill) result.push(employee);
      }
    }
  }
  return res.send(result);
});
app.get("/getEmployeesByProjectId/:id", (req, res) => {
  let result = [];
  for (const department of json) {
    for (const team of department.teams) {
      for (const employee of team.employees) {
        for (const projectId of employee.projects) {
          if (projectId == req.params.id) result.push(employee);
        }
      }
    }
  }
  return res.send(result);
});

app.get("/getAllDepartments", (req, res) => {
  return res.send(json);
});

//Project api

app.get("/getProjectsByUserId/:id", (req, res) => {
  //Gets person
  let emp;
  for (const department of json) {
    for (const team of department.teams) {
      for (const employee of team.employees) {
        if (employee.id == req.params.id) { emp = employee; break; };
      }
    }
  }
  //gets projects from person
  let empProjects = [];
  for (const project of projects) {
    for (const projectId of emp.projects) {
      if (projectId == project.id) empProjects.push(project);
    }
    
  }
  //Sends projects
  return res.send(empProjects);
});

app.get("/getProjectById/:id", (req, res) => {
  for (const project of projects) {
    if (project.id == req.params.id) return res.send(project);
  }
});
app.get("/getAllProjects", (req, res) => {
  return res.send(projects);
});
app.get("/getFristXProjects/:X", (req, res) => {
  let arr = [];
  for(let i = projects.length - 1; i >= (projects.length) - req.params.X; i--){
    arr.push(projects[i]);
  }
  return res.send(arr);
});
app.get("/getAllTeams", (req, res) => {
  let allTeams = [];
  for (const department of json) {
    for (const team of department.teams) {
      allTeams.push(team);
    }
  }
  return res.send(allTeams);
});
app.get("/Search/:query", (req,res) => {
  let searchResult = [];
  return res.send(searchResult);
});

//Config things
const port = 8000;

app.listen(port, () => {
  console.log(port);
});
