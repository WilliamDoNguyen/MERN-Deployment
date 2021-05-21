const MERN_Exam = require('../models/MERN_Exam.model');


module.exports.findAllMERN_Exams = (req, res)=>{
    MERN_Exam.find()
        .then(allMERN_Exams =>{
            res.json({results: allMERN_Exams})
        })
        .catch(err=>{
            res.json(err)
        })
}


module.exports.createMERN_Exam = (req, res)=>{

    console.log("REQUEST.BODY LOOKS LIKE THIS--->", req.body)
    MERN_Exam.create(req.body)
        .then(newMERN_Exam=>{
            res.json({results: newMERN_Exam})
        })
        .catch(err=>{
            console.log(err)
            res.json(err)
        })
}

module.exports.findOneMERN_Exam = (req, res)=>{
    MERN_Exam.findOne({_id: req.params.id })
        .then(oneMERN_Exam=>{
            res.json({results: oneMERN_Exam})
        })
        .catch(err=>res.json(err))
}

module.exports.updateOneMERN_Exam = (req, res)=>{
    MERN_Exam.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidators: true }
        )
        .then(updatedMERN_Exam =>{
            res.json({results: updatedMERN_Exam})
        })
        .catch(err=> res.json(err))
}


module.exports.deleteMERN_Exam = (req,res)=>{
    MERN_Exam.deleteOne({_id: req.params.id})
        .then(deletedMERN_Exam =>{
            res.json({results: deletedMERN_Exam})
        })
        .catch(err=> res.json(err))
}

module.exports.likeMERN_Exam = (request, res) => {
    Pet.findOneAndUpdate(
        {_id: request.params._id},
        {$inc: {likes: 1}}

    )
        .then(() => res.json({results: likepet}))
        .catch(err => response.json(err));
    }
