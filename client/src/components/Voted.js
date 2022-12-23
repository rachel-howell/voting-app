import React, { useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";


const Product = () => {
  const [contender, setContender] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/${id}`)
    .then( (res) => {
      console.log(res.data);
      setContender(res.data);
  })
  .catch( (err) => console.log(err) );
}, []);



  return (
    <div>
        <div> 
            <p>{contender.name}</p> 
            <p>{contender.pastTermStartDate}</p>
            <p>{contender.pastTermEndDate}</p>
            <p>{contender.party}</p>
            <p>{contender.experience}</p>
        </div> 
    </div>
  )
}

export default Voted;
// const deleteContender = (contenderId) => {
//   axios.delete('http://localhost:3000/api/' + contenderId)
//       .then((res) => {
//           console.log(res);
//       })
//       .catch(err => console.log(err))
// }