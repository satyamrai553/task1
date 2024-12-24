import express from "express"
import studentRouter from "./routes/student.routes.js"
import cors from "cors"
const app = express()

app.use(cors());


app.use("/api/v1/student", studentRouter);



app.listen(3000, ()=>{
    console.log("app is listening on port: 3000");
})


