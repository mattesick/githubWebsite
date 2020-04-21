
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
app.get("/AllProjects", (req, res) => {
  console.log("hello");
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
  json.forEach(department => {
    if (department.id == req.params.id) res.send(department);
  });
});

app.get("/getEmployeesWithArrayOfIds/:array", (req, res) => {
  req.params.array = JSON.parse(req.params.array);
  let employees = [];
  json.forEach(department => {
    department.teams.forEach(team => {
      team.employees.forEach(employee => {
        req.params.array.forEach(employeeId => {
          if (employee.id == employeeId) employees.push(employee);
        });
      });
    });
  });
  res.send(employees);
});

app.get("/getTeamById/:id", (req, res) => {
  console.log(req.params.id);
  json.forEach(department => {
    department.teams.forEach(team => {
      if (team.id == req.params.id) res.send(team);
    });
  });
});

app.get("/getTeamEmployeeById/:id", (req, res) => {
  json.forEach(department => {
    department.teams.forEach(team => {
      team.employees.forEach(employee => {
        if (employee.id == req.params.id) res.send(team);
      });
    });
  });
});

app.get("/getEmployeeById/:id", (req, res) => {
  json.forEach(department => {
    department.teams.forEach(team => {
      team.employees.forEach(employee => {
        if (employee.id == req.params.id) res.send(employee);
      });
    });
  });
});

app.get("/getEmployeesBySkill/:skill", (req, res) => {
  let result = [];
  json.forEach(department => {
    department.teams.forEach(team => {
      team.employees.forEach(employee => {
        if (employee.skills == req.params.skill) result.push(employee);
      });
    });
  });
  res.send(result);
});

app.get("/getAllDepartments", (req, res) => {
  return res.send(json);
});

//Project api

app.get("/getProjectsByUserId/:id", (req, res) => {
  //Gets person
  let emp;
  json.forEach(department => {
    department.teams.forEach(team => {
      team.employees.forEach(employee => {
        if (employee.id == req.params.id) emp = employee;
      });
    });
  });
  //gets projects from person
  let empProjects = [];
  projects.forEach(project => {
    emp.projects.forEach(projectId => {
      if (projectId == project.id) empProjects.push(project);
    });
  });
  //Sends projects
  res.send(empProjects);
});

app.get("/getProjectById/:id", (req, res) => {
  projects.forEach(project => {
    if (project.id == req.params.id) res.send(project);
  });
});
app.get("/getAllProjects", (req, res) => {
  res.send(projects);
});

//Config things
const port = 8000;

app.listen(port, () => {
  console.log(port);
});
