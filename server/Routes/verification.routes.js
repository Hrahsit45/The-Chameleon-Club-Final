const express = require("express");
const bodyParser = require("body-parser");
const { spawn } = require("child_process");
const app = express();


const router = express.Router();

app.use(bodyParser.json());

const fs = require("fs");
const path = require("path");


const Customize = (req, res) => {
  const data = req.body.data;
 console.log(req.body);
 // Spawn the child process to run the Python script
  const pythonProcess = spawn("python", ["cript.py"]);

  // Send the data to the Python script
  pythonProcess.stdin.write(JSON.stringify(data));
  pythonProcess.stdin.end(); 

  // Listen for data from the Python script
  pythonProcess.stdout.on("data", (data) => {
    console.log(`Received data from Python script: ${data}`);
  });

  // Listen for errors from the Python script
  pythonProcess.stderr.on("data", (data) => {
    console.error(`Error from Python script: ${data}`);
    res.send({ success: false, error: data });
  });
}

router.post("/send-data", Customize);


module.exports = router; 