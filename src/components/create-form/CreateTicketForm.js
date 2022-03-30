import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../../components/create-form/createticketform.css'


export const CreateTicketForm = ({handleOnChange, frmDt}) => {
    
    console.log(frmDt);
    
    return (
      <div className='jumbotron formbg'>
          <h2 className='text-center'>Create New Ticket</h2>
          <br />
              <Form autoComplete='off'>
                   <Form.Group className='row'>
                       <Form.Label className='col-sm-2'>Subject</Form.Label>
                       <Form.Control 
                        className='col-sm-4'
                        name='subject'
                        value= {frmDt.subject}
                        onChange={handleOnChange}
                        placeholder='Subject'
                        required
                       />
                   <br />                          
                   </Form.Group>
                   <Form.Group className='row'>
                       <Form.Label className='col-sm-2'>Issue Date</Form.Label>
                       <Form.Control 
                        className='col-sm-4'
                        type='date'
                        name='issueDate'
                        value= {frmDt.issueDate}
                        onChange={handleOnChange}
                        
                        required
                       />                                             
                   </Form.Group>
                   <br />
                   <Form.Group>
                       <Form.Label>Description</Form.Label>
                       <Form.Control 
                        as='textarea'
                        name='details'
                        rows='5'
                        value= {frmDt.details}
                        onChange={handleOnChange}
                        required
                       />                                             
                   </Form.Group>
                   <br />
                   <button type='submit' className='btn btn-block btn-primary' variant='info'>Create Ticket</button>
               </Form>

        

    </div>
  )
}

CreateTicketForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired, 
    frmDt: PropTypes.object.isRequired,
};

