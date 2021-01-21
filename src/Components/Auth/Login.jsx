import React, { useState } from 'react'
import './Login.scss'; 
import { auth } from '../../Firebase/Firebase'
import {useDispatch} from 'react-redux'
import {login} from '../../features/userSlice.js';



const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("")

    const dispatch = useDispatch()


    // Register
    const register = () => {
        if(!name) return alert("please enter a full name..")
        if(!email) return alert("please enter your email..")
        if(!password) return alert("please enter your password..")


        // create user 
        auth.createUserWithEmailAndPassword(email, password) 
        .then((userAuth) => {
            userAuth.user.updateProfile({ // firebase
                displayName: name, 
                firstName:'xxxxxxxxxxxx',
                photoURL: profilePic
            })
            .then(() => { // redux
                dispatch(login({
                    email: userAuth.user.email, 
                    uid: userAuth.user.uid, 
                    displayName: name, 
                    photoUrl: profilePic, 
                }));
            });
        })
        .catch(error=> alert(error))

        // empty the form
        setEmail('');
        setName('');
        setPassword('');
        setProfilePic('');
    };


    // Login
    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email, 
                uid: userAuth.user.uid, 
                displayName: userAuth.user.displayName, 
                profileUrl: userAuth.user.photoURL, 
            }))
            // userAuth.user(
            //     login({
            //         email: userAuth.user.email, 
            //         uid: userAuth.user.uid, 
            //         displayName: userAuth.user.displayName, 
            //         profileUrl: userAuth.user.photoURL, 
            //     })
            // )
        })
        .catch(error => alert(error))
    };


    // JSX Rendering
    return (
        <div className="login">
            <img src="https://ceohangout.com/wp-content/uploads/2015/07/logo-linkedin2.png" alt=""/>


            {/* form */}
            <form>
                <input type="text" 
                    placeholder="Full Name (required if registering)" 
                    value={name}
                    onChange={e=>setName(e.target.value)} 
                />

                <input type="text" placeholder='Profile picture URL (optional)' 
                    value={profilePic}
                    onChange={e=>setProfilePic(e.target.value)} 
                />

                <input type="email" placeholder="Email"  autoComplete="on"
                    value={email}
                    onChange={e=>setEmail(e.target.value)} 
                />

                <input type="password" placeholder="Password" autoComplete="on"
                    value={password}
                    onChange={e=>setPassword(e.target.value)} 
                />

                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a Member? 
                <span className="login__register" onClick={register}> Register Now</span>
            </p>
        </div>
    )
}

export default Login
