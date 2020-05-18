
const express = require('express');
const app = express();
const Storage = require("./storage");


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

let DB;
fs.readFile('data.json', (err, data) => {
  if (err) throw err;
  DB = new Storage.Database(JSON.parse(data));
});


app.get("/getDepartmentById/:id", (req, res) => {
  res.send(DB.getDepartmentById(req.params.id));
});

app.get("/getPersonsWithArrayOfIds/:array", (req, res) => {
  let arr = JSON.parse(req.params.array);
  res.send(DB.getPersonsWithArrayOfIds(arr));
});

app.get("/getTeamById/:id", (req, res) => {
  res.send(DB.getTeamById(req.params.id));
});

app.get("/getTeamByPersonId/:id", (req, res) => {
  res.send(DB.getTeamByPersonId(req.params.id));
});

app.get("/getPersonById/:id", (req, res) => {
  res.send(DB.getPersonById(req.params.id));
});
app.get("/getPersonTechnologiesByPersonId/:id", (req, res) => {
  res.send(DB.getPersonTechnologiesByPersonId(req.params.id));
});

app.get("/getPersonsByTechnology/:technology", (req, res) => {
    res.send(DB.getPersonsByTechnology(req.params.technology));
});
app.get("/getPersonsByProjectId/:id", (req, res) => {
  res.send(DB.getPersonsByProjectId(req.params.id));
});

app.get("/getAllDepartments", (req, res) => {
  res.send(DB.getAllDepartments());
});

//Project api

app.get("/getProjectsByPersonId/:id", (req, res) => {
  res.send(DB.getProjectsByPersonId(req.params.id));
});

app.get("/getProjectById/:id", (req, res) => {
  res.send(DB.getProjectById(req.params.id));
});
app.get("/getAllProjects", (req, res) => {
  res.send(DB.getAllProjects());
});
app.get("/getFirstXProjects/:X", (req, res) => {
  res.send(DB.getFirstXProjects(req.params.X));
});
app.get("/getAllTeams", (req, res) => {
  res.send(DB.getAllTeams());
});
app.get("/getTechnologyById/:id", (req, res) => {
  res.send(DB.getTechnologyById(req.params.id));
})
app.get("/getPersonRolebyPersonId:id",(req,res) => {
  res.send(DB.getPersonRolebyPersonId(req.params.id));
})
app.get("/Search/:query", (req, res) => {
  res.send(DB.search(req.params.query));
});

//Config things
const port = 8000;

app.listen(port, () => {
  console.log(port);
});
