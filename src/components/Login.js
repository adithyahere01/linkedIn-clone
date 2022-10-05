import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { auth } from '../firebase-config'
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import './Login.css'
import { login } from '../features/userSlice';

const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch()

    const register = async ()=>{
            try{
               const user =  await createUserWithEmailAndPassword(auth, email, password)
               if(user){
                   updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: profilePic
                   }).then(()=>{
                    dispatch(login({
                        email: auth.currentUser.email,
                        uid: auth.currentUser.uid,
                        displayName: name,
                        photoURL: profilePic
                    }))
                   }).catch((err)=> console.log(err.message))
               }
            }
            catch(err){
                console.log(err.message);
           }
    }

    const loginToApp = async (e) =>{
        e.preventDefault()
          try{
          const loggedUser =  await signInWithEmailAndPassword(auth, email, password);
          if(loggedUser){
              console.log(loggedUser)
                dispatch(login({
                    email: auth.currentUser.email,
                    uid: auth.currentUser.uid,
                    displayName: auth.currentUser.displayName,
                    photoURL: auth.currentUser.photoURL
                }))
            }  
          }    
          catch(err){
                console.log(err.message)
          }   
    }

  return (
    <div className='login'>
        <img src="../assets/linkedin-banner.jpg" alt="" />
        {/* <h1>You are not logged in</h1> */}

        <form>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder='Full Name' />
            <input type="text" value={profilePic} onChange={(e)=> setProfilePic(e.target.value)} placeholder='Profile pic (optional)' />
            <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Email' autoComplete="true" />
            <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password' autoComplete='current-password'/>

            <button type='submit' onClick={loginToApp}>Log In</button>
        </form>

        <p>Not a member? Fill the details and click {"     "}
           <button className='login-register' type='submit' onClick={register} >Register Now</button>
        </p>
    </div>
  )
}

export default Login