import React from 'react';
import {Form, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

export const UpdateTicket = ({msg, handleOnChange, handleOnSubmit}) => {
  return (
    <div>
        <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label>

            <Form.Control
                as='textarea'
                row='5'
                name='detail'
                value= {msg}
                onChange= {handleOnChange}
                placeholder='Enter your message'
            ></Form.Control>
            <div className='text-right mt-3'>
            <Button variant='info' type='submit'>Reply</Button>
            </div>
            
        </Form>
    </div>
  )
}

UpdateTicket.propTypes = {
    msg: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
}