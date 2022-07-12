import React, { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState= {
  name: '',
  email: '',
  password: '',
  isMember: false,
  showAlert: false
}


const Register = () => {
  const [values, setValues] = useState(initialState)

  const toggleMember = () => {
    setValues({...values, isMember:!values.isMember,})
  }

  const handleChange = (e) => {
    console.log(e.target)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
  }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {values.showAlert && <Alert /> }
        {!values.isMember && (
          <FormRow 
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
        />
        )}
        <FormRow 
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow 
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>submit</button>
        <button type='button' onClick={toggleMember} className='member-btn'>Register</button>
      </form>
    </Wrapper>
  )
}

export default Register 