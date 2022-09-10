import Nav from "./Nav";
import React, { useState, useEffect } from "react";
import axios from 'axios'
import ButtonComponent from "./ButtonComponent";
const PlayerStatus = () => {
    const [players, setPlayers] = useState([])

    const [game, setGame] = useState(0)

    const [isPlayerStatusChanged, setIsPlayerStatusChanged] = useState(false)

  
    let statusOption = [
        { status: 'Undecided', color: 'yellow' },
        { status: 'Playing', color: 'green' },
        { status: 'Not Playing', color: 'red' }
    ]

 useEffect(() => {
    axios.get(`http://localhost:8000/api/players`)
        .then(res => setPlayers(res.data.players))
        .catch(err => console.log(err))
    setIsPlayerStatusChanged(false)
}, [isPlayerStatusChanged])


const handleClick = (e) => {
    setGame(e.target.value)
}


const handleAction = (e, player) => {
    player.games[game].status = e.target.value
    axios.put(`http://localhost:8000/api/player/update/${player._id}`, player)
        .then(setIsPlayerStatusChanged(true))
        .catch(err => console.log(err))
}
    return ( 
        <div className="container mt-5">
            <div className="row border border-dark p-4">
                <Nav />
                <div className="m-1 border border-dark">
                <h3 className="d-flex mb-4">Player Status - <span className="mx-1"> Game {parseInt(game) + 1} </span></h3>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-link" value={0} onClick={handleClick}>Game 1</button> <span> | </span>
                <button className="btn btn-link" value={1} onClick={handleClick}>Game 2</button> <span> | </span>
                <button className="btn btn-link" value={2} onClick={handleClick}>Game 3</button>
                    </div>
                    <table className="table">
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                        <tbody>
                            {players.map(player => <tr key={player._id}>
                                <td>{player.name}</td>
                                <td>
                                    <ButtonComponent id={player._id} gameId={handleClick } />
                                </td>
                            </tr>

                            )}
                        </tbody>
                        </table>
                </div>
            </div>

        </div>
     );
}
 
export default PlayerStatus;