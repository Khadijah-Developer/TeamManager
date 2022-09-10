import React, {useState, useEffect} from 'react';
import axios from 'axios';


const ButtonComponent =  ({id, gameId} ) => {
    
    const [player, setPlayer] = useState();

    useEffect(()=> {
        axios.get("http://localhost:8000/api/player/" + id)
        .then(response => {
            setPlayer(response.data);
        })
    },[])
    const onPlayHandler = (stat) => {
               
        player.game1= stat;
     
        axios.put(`http://localhost:8000/api/player/` + id, player)
        .then(response => {
                setPlayer(response.data);
        })
        .catch(err => {
            console.log("ERROR UPDATING PLAYER")
        })
    }

    return(
        <div>
            <button style={{backgroundColor: player && player.game1 === "playing" ? "green" : ""}} 
            onClick={(e) => onPlayHandler("playing")}>
                Playing
            </button>
            <button style={{backgroundColor: player && player.game1 === "not playing" ? "red" : ""}} 
            onClick={(e) => onPlayHandler("not playing")}>
                Not Playing
            </button>
            <button style={{backgroundColor: player && player.game1 === "undecided" ? "yellow" : ""}} 
            onClick={(e) => onPlayHandler("undecided")}>
                Undecided
            </button>
       
        </div>
    )
}

export default ButtonComponent