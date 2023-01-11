import React from 'react'
import React, { useState} from 'react';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';


const Admin = () => {

    const [ candidateList, setCandidateList ] = useState([]);
    const { id } = useParams();

    useEffect (() => {
        axios
            .get('http://localhost:8000/api/candidates')
            .then((result) => setProductList(result.data))
            .catch(err => console.log(err))
    }, []);

    const deleteHandler = (id) => {
        axios
            .delete(`http://localhost:8000/api/${id}`)
            .then((result) => console.log(result))
            .catch(err => console.log(err))
            window.location.reload();
    }
  return (
    <div>
    { 
                candidateList.map(candidate => (
                    <div className="h5 container d-flex p-2 mx-auto my-2 justify-content-between border-top">
                        <Link to={`/api/${candidate._id}`}>{ candidate.name }</Link>
                        <div>
                            <btn className="btn border btn-danger" onClick={()=>deleteHandler(candidate._id)}>Delete</btn>
                        </div>
                    </div>
                ))
            }
        </div>
      )
}

export default Admin