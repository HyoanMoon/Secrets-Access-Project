//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var password = ""



app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck (req, res, next) {
 password = req.body["password"]
next();
}


app.use(passwordCheck);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

  


app.post("/check", (req, res) => {

    if(password ===  "ILoveProgramming") {
        res.sendFile(__dirname + "/public/secret.html");
        console.log(req.body)
    }
    else{
        res.sendFile(__dirname + "/public/incorrect.html");
    }
    
  });


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  

