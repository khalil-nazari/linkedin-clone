/*
    Khalil Nazari 
    7 Jan 2020
*/


import React from 'react';
import { useSelector } from 'react-redux'

import './App.scss';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Widgets from './Components/Widgets/Widgets';
import Login from './Components/Auth/Login'
import { selectUser } from './features/userSlice';



function App() {
  const user = useSelector(selectUser); 

  return (
    <div className="app">

      {/* Header */}
      <Header />

      {!user ? (
        <div className="container">
          <Login />
        </div>
      ):(
       <div className="app__body container">
          <Sidebar />
          <Feed />
          <Widgets />
      </div>
      )}
    </div>
  );
}

export default App;
