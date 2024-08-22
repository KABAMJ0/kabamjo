const express = require("express");
const bp = require("body-parser");
const fs = require("fs");
const app = express();

app.use("/login", express.static("login"));
app.use("/signup", express.static("signup"));
app.use("/", express.static("home"));

app.use(bp.urlencoded({ extended: true }))

app.post("/login_endpoint", (req, res) => {
  console.log(req.body);
  let accounts = JSON.parse(fs.readFileSync("database.json"));

  if (accounts[req.body.username] == req.body.password) {
    // you can change the html over                  here--\
    res.send("Je bent ingelogt als " + req.body.username + "!<br><button onclick=\"window.location.href='/'\">&lt; Terug</button>");
  } else {
    // you can change the html over                  here--\
    res.send("Er is iets fout gegaan je hebt waarshijnlijk een fout wachtwoord of gebruikersnaam ingevoerd!" + "<br><button onclick=\"window.location.href='/login'\">&lt; Terug</button><button onclick=\"window.location.href='/signup'\">OF Registeer &gt;</button>");
  }
});

app.post("/signup_endpoint", (req, res) => {
  console.log(req.body);
  let accounts = JSON.parse(fs.readFileSync("database.json"));

  if (!accounts[req.body.username]) {
    accounts[req.body.username] = req.body.password;
    fs.writeFileSync("database.json", JSON.stringify(accounts, null, 4));
    // you can change the html over                  here--\
    res.send("Dit is slechts een test maar welkom, " + req.body.username + "!<br><button onclick=\"window.location.href='/'\">&lt; Terug</button>");
  } else {
    // you can change the html over                  here--\
    res.send("Account bestaat al.<br><button onclick=\"window.location.href='/signup'\">&lt; Terug</button><button onclick=\"window.location.href='/login'\">Of login&gt;</button>");
  }
});
//hiero
app.use(express.static(__dirname + "/public"), (_, res, next) => {
  res.status(404)
  res.sendFile(__dirname + "/404.html")
});

app.listen(3000);