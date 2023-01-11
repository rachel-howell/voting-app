import React from 'react'
import Register from "../Register";
import Login from "../Login";

const Home = () => {
  return (
    <div>
        <div>
            <h1>Register as a Voter or Candidate</h1>
            <Register/>
        </div>
        <div>
            <h2>Back again?</h2>
            <Login/>
        </div>
    </div>
  )
}

export default Home