import React from 'react'
import axios from 'axios';

const DeleteButton = (props) => {
    const { playerId, successCallback } = props;
    
    const deletsPlayer = e => {
        axios.delete('http://localhost:8000/api/player/delete/' + playerId)
            .then(res=>{
                successCallback();
            })
    }
    return ( 
            <button className="btn btn-danger m-1" onClick={deletsPlayer}>
            Delete
        </button>
     );
}
 
export default DeleteButton;