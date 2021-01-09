import React from 'react'
import './Login.scss'; 




const Login = () => {

    const register = (e) => {

    }


    const login = (e) => {

    }



    return (
        <div className="login">
            <img src="https://ceohangout.com/wp-content/uploads/2015/07/logo-linkedin2.png" alt="Linkedin Image"/>



            {/* form */}
            <form>
                <input type="text" placeholder="Full Name (required if registering)" />

                <input type="text" placeholder='Profile picture URL (optional)' />
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit" onClick={login}>Sign In</button>


                <p>Not a Member?
                    <span className="login__register" onClick={register}>Register Now</span>
                </p>
                {/* <input type="text" />
                <input type="text" /> */}
            </form>
        </div>
    )
}

export default Login
