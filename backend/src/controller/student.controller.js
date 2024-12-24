import { students } from "../constant.js";

const studentList = (req, res) => {
    res.status(200).json({
        message: "Fetched successfully",
        data: students,
    });
};

export { studentList };
