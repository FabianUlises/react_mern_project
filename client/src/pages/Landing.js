import main from '../assets/images/main.svg';
import React from 'react';
import { Logo } from '../components';
import { Wrapper } from '../assets/wrappers/LandingWrapper';

const Landing = () => {
  return (
    <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
            <div className="info">
                <h1>job <span>tracking</span> app</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugit provident voluptate quia pariatur non quisquam suscipit, labore iusto qui.</p>
                <button className='btn btn-hero'>Login</button>
            </div>
            <img src={main} alt="job hunt" className='img main-img' />
        </div>
    </Wrapper>
  )
}

export default Landing