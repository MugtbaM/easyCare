import connectDB from "./db/connectdb.js";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
import router from "./router.js";


const express = require ("express");


const app = express();

const dbURL = "mongodb://localhost:27017/easycare";
connectDB(dbURL);

app.use(express.json());

app.use("/api", router);

const port = 3000;
app.listen(port, function(){
    console.log("Server started at the specified port");
});