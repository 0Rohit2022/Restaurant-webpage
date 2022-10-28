
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Header from "./components/Header";


import "./styles/styles.css"
const App = () => {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
     </Router>
    </>
  );
}

export default App;
