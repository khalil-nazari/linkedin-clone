/*
    Khalil Nazari 
    7 Jan 2020
*/


import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import './App.scss';
import Feed from './Components/Feed/Feed';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Widgets from './Components/Widgets/Widgets';
import Login from './Components/Auth/Login'
import {selectUser, logout, login} from './features/userSlice';
import { auth } from './Firebase/Firebase';



function App() {

  const user = useSelector(selectUser); 
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // user is logged in 
        dispatch(login({
          email: userAuth.email, 
          uid: userAuth.uid, 
          displayName: userAuth.displayName, 
          photoUrl: userAuth.photoURL, 
        }));
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">

      {/* Header */}
      <Header />

      {!user ? (
        <div className="container">
          <Login />
        </div>
      ) : (
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
