import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import PresentsList from "./pages/PresentsList";
import Login from "./pages/Login";

function App() {
  return (
    <div className="bg-primary-yellow">
      <Router>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route exact path='/presents' element={<PresentsList/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
