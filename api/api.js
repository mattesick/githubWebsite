
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
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get("/AllProjects", (req, res) => {
    console.log("hello");
});

let json;

fs.readFile('person.json', (err, data) => {
  if (err) throw err;
  person = JSON.parse(data);
  json = person;
});
app.route('/api/cats/:name').get((req, res) => {
  console.log("getting cat");
  const requestedCatName = req.params['name']
  res.send({ name: requestedCatName })
})

app.get("/getDepartmentById/:id", (req, res) => {
    json.forEach(department => {
      if(department.id == req.params.id) res.send(department);
    });
    res.send(404);
});

app.get("/getTeamById/:id", (req, res) => {
  let responseTeam = {};
  console.log("got called");
  json.forEach(department => {
   department.teams.forEach(team => {
      if(team.id == req.params.id) responseTeam = team;
   });
  });
  res.send(responseTeam);
});

app.get("/getAllDepartments", (req, res) => {
  return res.send(json);
});

//Config things
const port = 8000;

app.listen(port, () => {
  console.log(port);
});
