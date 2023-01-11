import React, { useState, useRef, useEffect } from 'react'

const Winner = () => {
    const [candidateList, setCandidateList] = useState([])
    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00:00');

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
  
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 1440 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const greatestCounter = (id) => {
        Math.max.apply(Math, candidateList.map(function(o) { return o.counter; }))
    }
    


  return (
    <div>
        <div className="App">
            {/* if there is time remaining only output the time */}
            {/* else output only the candidate with the greatest number of 
            votes by using another ternary operator */}
            {getTimeRemaining >= 0} ? <h1>{timer}</h1>: <h1>{greatestCounter}</h1>
            {candidateList.filter(candidate => candidate.includes({greatestCounter})).map(filteredCandidate => (
            <h1>
            {filteredCandidate}
            </h1>
        ))}
        </div>
    </div>
  )
}


export default Winner;