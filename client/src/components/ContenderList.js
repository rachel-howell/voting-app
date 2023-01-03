import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom';

const ContenderList = () => {   
    const [contenderList, setContenderList] = useState([]);

    useEffect (() => {
        axios.get('http://localhost:8000/api/contender')
            .then((res) => setContenderList(res.data))
            .catch(err => console.log(err))
    }, []);

    const deleteSelection = (index) => {
        setContenderList((prevState) => {
          let items = [...prevState];
          console.log(items);
          items.splice(index, 1);
          return items;
        });
      };

  return (
    <div>
        { 
            contenderList.map(contender => (
                <div className="h5 container d-flex p-2 mx-auto my-2 justify-content-between border-top">
                    <Link to={`/api/${contender._id}`}>
                        <label>{contender.firstName} {contender.lastName} 
                            <input type="radio"/>
                        </label>
                    </Link>
                    <button id="Delete" onClick={deleteSelection}>
                        ✗
                    </button>
                </div>
            ))
        }
    </div>
  )
}

export default ContenderList;