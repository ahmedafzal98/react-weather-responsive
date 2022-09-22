import "./App.css";
import Home from "./Components/Pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" exact element={<Home />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
