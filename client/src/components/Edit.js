import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';


const Edit = props => {
    const [Info, setInfo] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/MERN_Exams/${props.id}`)
            .then(res => {
                console.log(res);
                setInfo(res.data.results)
            })
            .catch(errors => console.log(errors));
    }, [props.id]);

    const changeHandler = (e) => {
        console.log(e.target)
        setInfo({
            ...Info,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:8000/api/MERN_Exams/update/${props.id}`, Info)
            .then(response => {
                if (response.data.results) {
                    console.log(response)
                    navigate("/")
                }
                else {
                    setErrors(response.data.errors);
                }
            })
            .catch(err => console.log("error on making the put request", err))
    }

    return (
        <div>
            <p><Link to="/">Back to Home</Link></p>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" onChange={changeHandler} value={Info.name} />
                    <p>{errors.name ? errors.name.message : ""}</p>
                </div>
                <div className="form-group">
                    <label>Type</label>
                    <input type="text" name="type" className="form-control" onChange={changeHandler} value={Info.type} />
                    <p>{errors.type ? errors.type.message : ""}</p>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="description" className="form-control" onChange={changeHandler} value={Info.description} />
                    <p>{errors.description ? errors.description.message : ""}</p>
                </div>
                <div className="form-group">
                    <label>Skill 1</label>
                    <input type="text" name="skill1" className="form-control" onChange={changeHandler} value={Info.skill1} />
                    <p>{errors.skill1 ? errors.skill1.message : ""}</p>
                </div>
                <div className="form-group">
                    <label>Skill 2</label>
                    <input type="text" name="skill2" className="form-control" onChange={changeHandler} value={Info.skill2} />
                    <p>{errors.skill2 ? errors.skill2.message : ""}</p>
                </div>
                <div className="form-group">
                    <label>Skill 3</label>
                    <input type="text" name="skill3" className="form-control" onChange={changeHandler} value={Info.skill3} />
                    <p>{errors.skill3 ? errors.skill3.message : ""}</p>
                </div>
                <input type="submit" value="Update Info" />
            </form>
        </div>
    )
}

export default Edit;
