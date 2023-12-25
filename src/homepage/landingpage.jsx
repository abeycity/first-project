import React from 'react';
import'./landingpage.css'
import { Link } from 'react-router-dom';
const LandingPage = () => {




  return (
     
    
    <section>
      <div className='landing-page-container'>

       <div className='chartapp-container'>
            <h3>Chat App using flask</h3>
            <div className='login-register-container'>
              <div className='register-btn' > <Link to='./registration' className='home-btn'>Register</Link></div>
              <div className='login-btn' ><Link to='./login' className='home-btn'>login</Link></div>
            </div>
        </div>
      </div>
    </section>
    
    
  )
}

export default LandingPage