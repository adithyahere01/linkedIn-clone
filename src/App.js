import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux/es/exports';
import './App.css';
import { login, selectUser } from "./features/userSlice"
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import { auth } from './firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import Widgets from './components/Widgets';

function App() {
  
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
     onAuthStateChanged(auth, (currentUser)=>{
        if(currentUser){
          dispatch(login({
            email: auth.currentUser.email,
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
            photoURL: auth.currentUser.photoURL
          }))
        }
     })
  },[])
  
  return (
    <div className="app">
      {/* header */}
      <Header/>

      {!user ? <Login/> : (
           <div className="app_body">
             <Sidebar/>
             <Feed/>
             <Widgets/>
             
           </div>
      )}
            
    </div>
  );
}

export default App;
