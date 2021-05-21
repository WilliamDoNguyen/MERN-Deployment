import React, { useState, useEffect, setState } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';


const Info = (props) => {

    const [InfoDets, setInfoDets] = useState({})
    const [likes, setLikes] = useState(0)
    const [condition, setCondition] = useState("")


    const deleteInfo = (e) => {
        axios.delete(`http://localhost:8000/api/MERN_Exams/delete/${props.id}`)
            .then(response => {
                console.log(response)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/MERN_Exams/${props.id}`)
            .then(res => {
                console.log(res)
                setInfoDets(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    const likePet = (_id) => {
        axios.put(`http://localhost:8000/api/MERN_Exams/update/${props.id}`, likes)
            .then(res => {
                console.log(res)
                setLikes(likes + 1)
                setCondition(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <p><Link to="/">Back to Home</Link></p>
            <h1>Details about: {InfoDets.name} </h1>
            <h3>Pet Type: {InfoDets.type}</h3>
            <h3>Description: {InfoDets.description}</h3>
            <h3>Skills: {InfoDets.skill1}</h3>
            <h3>{InfoDets.skill2}</h3>
            <h3>{InfoDets.skill3}</h3>
            <button onClick={likePet} disabled={condition}>{likes} Likes</button>
            <button onClick={deleteInfo}>ADOPT</button>
        </div>
    )
}

export default Info;
