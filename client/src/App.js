import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import AddPlayer from "./components/AddPlayer";
import Player from "./components/PlayerStatus";

import './App.css';


function App() {
  return (
    <div className="App">
         <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/new" element={<AddPlayer/>} />
          <Route exact path="/status/game/1" element={<Player/>} />
          {/* <Route exact path="/edit/:id" element={<UpdateAuthor/>} />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
