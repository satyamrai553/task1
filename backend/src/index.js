import express from "express"
import studentRouter from "./routes/student.routes.js"
const app = express()


app.use("/api/v1/student", studentRouter);



app.listen(3000, ()=>{
    console.log("app is listening on port: 3000");
})


