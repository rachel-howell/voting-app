import React, { useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams} from "react-router-dom";


const Voted = () => {
  const [contender, setContender] = useState({});
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const {submitted, setSubmitted} = useState(false)
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/${id}`)
    .then( (res) => {
      console.log(res.data);
      setName(res.data);
      setCounter(counter => counter + 1)
      console.log(e.target.value, data);

  })
  .catch( (err) => console.log(err) );
}, []);

  const onSubmitHandler = e => {

    if (submitted) {
      return;
    }
    e.preventDefault();
    //Send a post request to our API to create a Book
    axios.put('http://localhost:8000/api/vote/${id}', {
        name,
        counter
    })
    .then(res=>
      console.log(res.data)),
      setSubmitted(true)
      .catch( (err) => console.log(err) )
      navigate("/api/winner")
    }         


  return (
    <div>
        <div> 
            <p>{contender.name}</p> 
            <p>{contender.pastTermStartDate}</p>
            <p>{contender.pastTermEndDate}</p>
            <p>{contender.party}</p>
            <p>{contender.stance}</p>
            <p>{contender.experience}</p>
            <form onSubmit={onSubmitHandler}>
              <input type="text" defaultValue={contender.name} onChange={e => setName(e.target.value)}></input>
              <input type="checkbox"  defaultChecked={false} onClick={((e) => setCounter(e, data))}></input>
              <button>Vote for this Candidate</button>
            </form>
            <Link to={`/api/contender`} className="btn border btn-info">Back</Link>
        </div> 
    </div>
  )
}

export default Voted;
