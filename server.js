const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const cors = require("cors");


const corsOptions = {
  origin: ["https://challenge-digiventures.vercel.app",'http://challenge-digiventures.vercel.app','https://digiventures-challenge.herokuapp.com'],
  credentials:true
};


const port = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

//Configuration requires
const ConfigurationModel = require("./api/models/inputs.json");
const ConfigurationService = require("./api/services/ConfigurationService");
const ConfigurationController = require("./api/controllers/ConfigurationController");
const dbConnection = require("./api/ultil/dbconnection");

//Configuration instances
const ConfigurationServiceInstance = new ConfigurationService(
  ConfigurationModel
);

const ConfigurationControllerInstance = new ConfigurationController(
  ConfigurationServiceInstance
);


app.prepare().then(() => {
  const server = express();
  server.use(cors(corsOptions));

  server.use(bodyParser.urlencoded({ extended: false }))
  server.use(bodyParser.json())


  server.use("/users", require("./api/routes/user.routes"));

  //Mongodb Connection

  // const MongoClient = require("mongodb").MongoClient;

  // const url = "mongodb://localhost:27017/digiventures";
  // MongoClient.connect(url, (err, db) => {
  //   if (err) throw err;
  //   console.log("Database created!");
  //   db.close();
  // });
  

   dbConnection().then( ()=> {
    console.log('dale que se conectaaaaaaaaaaaaaaaa')
    console.log("Database connected!");
  
   }).catch(err => console.log(err));

  //get configuration by path
  server.get("/configuration/:path", (req, res) => {
    ConfigurationControllerInstance.get(req, res);
  });

  server.post("/:path", (req, res) => {
    return res.sendStatus(200);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });





});
