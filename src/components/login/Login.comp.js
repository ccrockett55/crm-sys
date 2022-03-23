import React from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types';


export const Login = ({handleOnChange, formSwitcher, email, pass}) => {
  return (
    <div className='container'>
       <div className='row'>
           <div className='col'>
               <h1>Client Login</h1>
               <hr />
               <Form autoComplete='off'>
                   <Form.Group>
                       <Form.Label>Email Address</Form.Label>
                       <Form.Control 
                        type='email'
                        name='email'
                        value= {email}
                        onChange={handleOnChange}
                        placeholder='Enter Email'
                        required
                       />
                                             
                   </Form.Group>
                   <Form.Group>
                       <Form.Label>Password</Form.Label>
                       <Form.Control 
                        type='password'
                        name='password'
                        value= {pass}
                        onChange={handleOnChange}
                        placeholder='Password'
                        required
                       />                                             
                   </Form.Group>
                   <br />
                   <button type='submit' className='btn btn-primary'>Login</button>
               </Form>
           </div>
       </div>
       <br />
            <div className='forgot'>
                <a href='#!' onClick={() => formSwitcher('reset')}>Forgot Password?</a>
                
                </div>
    </div>
  )
}

Login.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired
};