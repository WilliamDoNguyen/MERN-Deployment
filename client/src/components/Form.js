import React, {useState} from 'react';
import axios from 'axios';
import{navigate, Link} from '@reach/router';

const CreateInfo = () => {

        const[name, setName] = useState("");
        const[type, setType] = useState("");
        const[description, setDescription] = useState("");
        const[skill1, setSkill1] = useState("");
        const[skill2, setSkill2] = useState("");
        const[skill3, setSkill3] = useState("");


        const [errors, setErrors] = useState({})

    const addInfo = (e) => {
        e.preventDefault();
        const newinformation = {name, type, description, skill1, skill2, skill3};
        axios.post("http://localhost:8000/api/MERN_Exams/create", newinformation)
        .then(res =>{
            console.log(res);
            if(res.data.errors){
                setErrors(res.data.errors)
            }
            else {
                navigate("/");
            }
        })
        .catch(err=>console.log(err));
    }

    return (
        <div>
            <p><Link to="/">Back to Home</Link></p>
            <form onSubmit={addInfo} className="col-6 mx-auto">
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="name" id="" className="form-control" onChange= {e=>setName(e.target.value)}/>
                    <p className="text-danger">{errors.name? errors.name.message:""}</p>
                </div>
                <div className="form-group">
                    <label>Type</label>
                    <input type="text" className="type" id="" className="form-control" onChange= {e=>setType(e.target.value)}/>
                    <p className="text-danger">{errors.type? errors.type.message: ""}</p>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" className="description" id="" className="form-control" onChange= {e=>setDescription(e.target.value)}/>
                    <p className="text-danger">{errors.description? errors.description.message: ""}</p>
                </div>
                <div className="form-group">
                    <label>Skill 1</label>
                    <input type="text" className="skill1" id="" className="form-control" onChange= {e=>setSkill1(e.target.value)}/>
                    <p className="text-danger">{errors.skill1? errors.skill1.message: ""}</p>
                </div>
                <div className="form-group">
                    <label>Skill 2</label>
                    <input type="text" className="skill2" id="" className="form-control" onChange= {e=>setSkill2(e.target.value)}/>
                    <p className="text-danger">{errors.skill2? errors.skill2.message: ""}</p>
                </div>
                <div className="form-group">
                    <label>Skill 3</label>
                    <input type="text" className="skill3" id="" className="form-control" onChange= {e=>setSkill3(e.target.value)}/>
                    <p className="text-danger">{errors.skill3? errors.skill3.message: ""}</p>
                </div>
                <input type="submit" value="Submit" className="btn btn-success"/>
            </form>
        </div>
    );
};

export default CreateInfo;
