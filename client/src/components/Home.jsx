import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Nav2 from "./Nav2";
import DeleteButton from "./DeleteButton";
import axios from "axios";
const Home = () => {
        const [players, setPlayers] = useState([]);
        const [isDeleted, setIsDeleted] = useState(false);
        useEffect(() => {
          axios
            .get(`http://localhost:8000/api/players`)
            .then((res) => setPlayers(res.data.players))
            .catch((err) => console.log(err));
        }, [isDeleted]);

        const handleDelete = (id) => {
          setPlayers( players.filter((p) => p._id !== id));
          setIsDeleted(true);
        };
    
    return (
      <div className="container mt-5">
        <div className="row border border-dark p-4">
          <Nav />
          <div className="m-1 border border-dark">
          <Nav2 />
            <table className="table">
              <thead>
                <tr>
                  <th>Player name</th>
                  <th>Preferred position</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player) => (
                  <tr key={player._id}>
                    <td>{player.name}</td>
                    <td>{player.position}</td>
                    <td>
                      <DeleteButton
                        
                        playerId={player._id}
                        successCallback={() => handleDelete(player._id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}
 
export default Home;