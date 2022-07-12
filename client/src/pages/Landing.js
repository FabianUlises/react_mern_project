import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import React from 'react';
import styled from 'styled-components';

const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <img src={logo} alt="Jobify" className='logo' />
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
const Wrapper = styled.div`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

`
export default Landing