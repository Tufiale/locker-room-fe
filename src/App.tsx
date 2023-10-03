import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Homepage from "./containers/Homepage";

function App() {
  return (
    <HashRouter basename="/">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
