import React from 'react';
import './App.css';
import AxiosComp from './AxiosComp/AxiosComp';
import ClassnameComp from './ClassNameComp';
import ReactMediaComp from './ReactMediaComp';

function App() {
  
  return (
    <div className="App">
      <AxiosComp />
      <ClassnameComp />
      <ReactMediaComp />
    </div>
  );
}

export default App;
