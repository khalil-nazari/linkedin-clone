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



// const firebaseConfig = {
//   apiKey: "AIzaSyCbAXwNYRbtJCVtmfyvvXndJL7mCe1bfPQ",
//   authDomain: "linkedin-clone-c8d31.firebaseapp.com",
//   projectId: "linkedin-clone-c8d31",
//   storageBucket: "linkedin-clone-c8d31.appspot.com",
//   messagingSenderId: "1090703810520",
//   appId: "1:1090703810520:web:5f64cbed6538c3d5245cad"
// };