import React from 'react'
import './loginandregistration.css'
import {Link}  from "react-router-dom"
import backgroundImg from '../image/background-img.jpg'

const Registration = () => {
  return (
    <>
   <section className='registration-form-container'>
      <div className='right-cont'>
        <div className='form-container'>
          <div className='form-heading'>
             <h3>Welcome to ChatBox!</h3>
             <main>Register your account </main>
           </div>
             
          <form>
              <label htmlFor='name'>Name</label>
              <input type="text" placeholder='enter your username' id='name' />
              <label htmlFor="email">Email</label>
              <input type='email' placeholder='Enter your Email' id='email'/>
              <label htmlFor='password'>Password</label>
              <input type="password" placeholder='Enter your password' id='password'/>
          </form>
          <div className='btn-cont'>
          <button>register</button>
          </div>
         
          <p><Link to='/forgotpassword'>already have an account?</Link><span className='login-txt'><Link to='/login'>Login</Link></span></p>
        </div>
      </div>
       <div className="image-container">
         <img src={backgroundImg} alt="" />
       </div>
    </section>
    </>
  )
}

export default Registration;

