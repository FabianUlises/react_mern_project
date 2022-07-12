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
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media screen and (min-width: 992px) {
    .page {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`
export default Landing