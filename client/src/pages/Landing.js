import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import React from 'react';

const Landing = () => {
  return (
    <main>
        <nav>
            <img src={logo} alt="Jobify" className='logo' />
        </nav>
    </main>
  )
}

export default Landing