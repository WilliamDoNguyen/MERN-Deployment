const MERN_ExamController = require("../controllers/MERN_Exam.controller");


module.exports = app =>{
    app.get("/api/MERN_Exams", MERN_ExamController.findAllMERN_Exams)
    app.post("/api/MERN_Exams/create", MERN_ExamController.createMERN_Exam)
    app.get("/api/MERN_Exams/:id", MERN_ExamController.findOneMERN_Exam)
    app.put("/api/MERN_Exams/update/:id", MERN_ExamController.updateOneMERN_Exam)
    app.put("/api/MERN_Exams/like/:id", MERN_ExamController.likeMERN_Exam)
    app.delete("/api/MERN_Exams/delete/:id", MERN_ExamController.deleteMERN_Exam)
}
