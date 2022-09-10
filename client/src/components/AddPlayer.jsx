import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from './Nav';
import Nav2 from "./Nav2";
import PlayerForm from './PlayerForm';
import { Link, useNavigate } from 'react-router-dom';

const AddPlayer = (props) => {
  const [player, setPlayer] = useState({ 
    name: '',
    position: 'Forward',
    games: [ {status:'Undecided'} , {status:'Undecided'}, {status:'Undecided'}]
    });
    const [playerCreated, setPlayerCreated] = useState(false);
    
  const [errors, setErrors] = useState({
    msg: '',
    isError: true,
    });
  const navigate = useNavigate();
   const handleChange = (event)=> {
    const { name, value } = event.target;
    
    setPlayer({ ...player, [name]: value })

    //handle errors
    if (name === 'name') {
      setErrors({ ...errors, msg: '', isError: true })
        if (value.length < 2 && value.length !== 0) {
          setErrors({ msg: `Name must be at least 2`, isError: true })
        }
        else if (value.length >= 2) {
          setErrors({ msg: '', isError: false })
        }

    }
    }
    const handleSubmit = (event)=> {
            event.preventDefault();
            setPlayerCreated(false);
            setErrors([]);
            axios.post('http://localhost:8000/api/player/new', player)
            .then((response) => {
              setPlayerCreated(true);
              navigate("/");
            })
          .catch((err) => {
          console.log(err);
        // const data = err.response.data;
        // const errorMessages = [];
        // if ("errors" in data) {
        //   for (let field in data.errors) {
        //     const validationError = data.errors[field];
        //     errorMessages.push(validationError.message);
        //   }
        // }
        // setErrors(errorMessages);
          });
    }
    return (<div className="container mt-5">
      <div className="row border border-dark p-4">
        <Nav />
        <div className="m-1 border border-dark p-3">
        <Nav2/>
          <div className="row border ">
        
          {errors &&
                    <div className="alert alert-danger">{errors.msg}</div>}
                <PlayerForm {...player} handleChange={handleChange} handleSubmit={handleSubmit} value="Add" isError={errors.isError} />
        </div>
        </div>
   </div>
    </div> );
}
 
export default AddPlayer;
 
