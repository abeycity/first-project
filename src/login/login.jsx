import React from 'react'
import './loginandregistration.css'
import {Link} from "react-router-dom"
import backgroundImg from '../image/background-img.jpg'

const Login = () => {
  return (
    <>
    <section className='login-container'>
        <div className='right-cont'>
          <div>
            {/* <div className='displayErorr'><h3>display error</h3></div> */}
              <div className='login-header'>
              <h4>Login to your ChatBox</h4>
              </div>
              <form action="">
                  <label htmlFor="username">username</label>
                  <input type="text" placeholder='enter your username' id="username" />
                  <label htmlFor="password">password</label>
                  <input type="password" placeholder='enter your password' id="password" />
              </form>
              <div className='btn-cont'>
                  <button>register</button>
              </div>
         
              <p> <span> <Link to="/forgotPassword">fogot password?</Link></span>create a new account.<Link to="/registration">register</Link></p> 
          </div>
         
        </div>
        <div className='image-container'>
          <img src={backgroundImg} alt="background" />
        </div>
    </section>
    </>
  )
}

export default Login