
const express = require('express');
const app = express();


const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const fs = require("fs");


//Cookie secret
app.use(cookieSession({
  secret: "adjsoaiuhdiaphfisdhfiosdahfisadhifhasdifhasdpiufhasoih"
}));
app.use(bodyParser.urlencoded({ extended: true }))

const cors = require('cors')

var corsOptions = {
  origin: 'http://localhost:4200/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(cors(corsOptions))

app.get("/AllProjects", (req, res) => {
    console.log("hello");
});

let json;

fs.readFile('person.json', (err, data) => {
  if (err) throw err;
  person = JSON.parse(data);
  json = person;
});

app.get("/getDepartmentById/:id", (req, res) => {
    json.forEach(department => {
      if(department.id == req.params.id) res.send(department);
    });
    res.send(404);
});

app.route("/getTeamById/:id").get((req, res) => { console.log("Tried!")
  json.forEach(department => {
   department.teams.forEach(team => {
      if(team.id == req.params.id) res.send(team);
   });
  });
  res.send(204);
});

app.get("/getAllDepartments", (req, res) => {
  return res.send(json);
});

//Config things
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(port);
});
