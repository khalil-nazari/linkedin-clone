/*
    Khalil Nazari 
    7 Jan 2020
*/


import React from 'react';
import './App.scss';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Widgets from './Components/Widgets/Widgets';


function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header />


       {/* App Body */}
      <div className="app__body container">
          {/* sidebare */}
          <Sidebar />

          {/* Feed */}
          <Feed />


          {/* Widegets */}

          <Widgets />
      </div>
    </div>
  );
}

export default App;
