/**
 * ConsUML Web server that expose a REST API
 */
const fs = require('fs');
const express = require('express');
const path = require('path');
const config=require('./config.js');
const consuml=require('./consuml.js');

const app = express();
/**
 * return a static html file
 */
app.get(config.CONSUML_SERVICE_HOME_PATH, (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})
/**
 * return a list of uml files paths (FROM the PUML_DIR directory)
 */
app.get(config.CONSUML_SERVICE_PUMLDIR_PATH, (req, res) => {
  res.send(fs.readdirSync(path.join(__dirname +"/"+ config.PUML_DIR)));
})
/**
 * params: uml file path
 * 1- extract status of services from consul api
 * 2- create a new uml diagram (plantuml syntax) 
 * 3- call a plantuml service to create an svg image
 * return an svg image
 */
app.get(config.CONSUML_SERVICE_SVG_PATH, (req, res) => { 
    consuml.form(req.params.umlfile, function(result){
      res.send(result);
    })
  })

/**
 * start a web server on config.CONSUML_SERVICE_PORT
 */
app.listen(config.CONSUML_SERVICE_PORT, () => {
  console.log(`Consuml app listening on port ${config.CONSUML_SERVICE_PORT}`)
})