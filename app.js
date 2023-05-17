require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/userRouter");

app.use(express.json());

app.use("/api/", userRouter);

// app.get("/", (req, res)=>{
//     res.json({
//         success: 1,
//         massege: "this is rest apis working"
//     });
// });

app.listen(process.env.APP_PORT, ()=>{
    console.log("Server up and running on port: ", process.env.APP_PORT);
})