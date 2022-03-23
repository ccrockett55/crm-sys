import React from 'react'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types';


export const ResetPassword = ({handleOnChange, email}) => {
  return (
    <div className='container'>
       <div className='row'>
           <div className='col'>
               <h1>Password Reset</h1>
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
                   
                   <br />
                   <button type='submit' className='btn btn-primary'>Reset Password</button>
               </Form>
           </div>
       </div>
       <br />
            <div className='forgot'>
                <a href='../../components/login/Login.comp'>Login Now</a>
                
                </div>
    </div>
  )
}

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired
};