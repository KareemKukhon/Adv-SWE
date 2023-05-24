require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/JobListings/Router");

app.use(express.json());

app.use("/api/", userRouter);


app.listen(process.env.APP_PORT, ()=>{
    console.log("Server up and running on port: ", process.env.APP_PORT);
})