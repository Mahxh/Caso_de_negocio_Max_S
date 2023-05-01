
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


import DataSensor from './components/DataSensor';
import  LoadCSV  from './components/LoadCSV';
import  Navbar  from './components/Navbar';



function App() {
  return (
    <Router>
      <Navbar/>
      <div className='container p-4'>
        <Routes>
          <Route path="/DataSensor" element={<DataSensor/>}/>
          <Route path='/' element={<LoadCSV/>}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
