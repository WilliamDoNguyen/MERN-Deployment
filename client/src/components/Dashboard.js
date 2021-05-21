import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const AllInfo = () => {
    const [information, setInformation] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/MERN_Exams")
            .then(res => {
                console.log(res)
                setInformation(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
        <Link to="/MERN_Exams/create">Add a pet to the shelter</Link>
        <h2>These pets are looking for a good home</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {information.map((results, idx) => {
                    return <tbody key={idx}>
                        <tr class="table-dark">
                            <td>{results.name}</td>
                            <td>{results.type}</td>
                            <td><Link to={`/MERN_Exams/${results._id}`}>Details</Link>|<Link to={`MERN_Exams/update/${results._id}`}>Edit</Link></td>
                        </tr>
                    </tbody>
                })}
            </table>
        </div>
    );
};

export default AllInfo;
