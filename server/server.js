const express  = require("express");
const db = require("./config/db");
const routes = require("./routes/taskRoute");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/task/",routes);

db();
port = 3030;


app.listen(port,() =>{
    console.log("server is listening");
    
})