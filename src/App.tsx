import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Homepage from "./containers/Hompage/Homepage";
import PlayersPage from "./containers/PlayersPage/PlayersPage";

function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/players" element={<PlayersPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
