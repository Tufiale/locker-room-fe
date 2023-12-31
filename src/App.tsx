import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Homepage from "./containers/Hompage/Homepage";
import PlayersPage from "./containers/PlayersPage/PlayersPage";
import EditPlayer from "./containers/EditPlayer/EditPlayer";
import AddPlayer from "./containers/AddPlayer/AddPlayer";

function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/players/:id" element={<EditPlayer />} />
        <Route path="/players/create" element={<AddPlayer />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
