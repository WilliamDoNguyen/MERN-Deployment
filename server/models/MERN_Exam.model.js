const mongoose = require("mongoose")


const ExamSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Name is required!"],
        minLength: [3, "Name must be at least 3 characters"],
        maxLength: [100000000, "Name can't be that long"]
    },

    type: {
        type: String,
        required: [true, "Type is required!"],
        minLength: [1, "Type must be at least 1 character"],
        maxLength: [100000000, "Type name can't be that long"]
    },

    description: {
        type: String,
        required: [true, "Description is required!"],
        minLength: [5, "Description must be at least 5 characters"],
        maxLength: [100000000, "Description can't be that long"]
    },

    skill1: {
        type: String,
    },

    skill2: {
        type: String,
    },

    skill3: {
        type: String,
    },

    likes: {
        type:Number,
    }

}, {timestamps:true})


const Exam = mongoose.model("Exam", ExamSchema );

module.exports = Exam;
