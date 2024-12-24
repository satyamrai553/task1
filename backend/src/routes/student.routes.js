import { Router } from "express"
import { studentList } from "../controller/student.controller.js"

const router = Router()



router.get("/list", studentList);


export default router