import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import searchicon from '../../assets/images/search.png'

export const SearchForm = ({handleOnChange, str}) => {
    
  return (
    <div>
        <Form>
           <Form.Group as={Row}>
           <Form.Label sm="2">
                <img src={searchicon} width="30" height="30" />
                </Form.Label>        
               <Col sm="9">
               <Form.Control
                name="searchStr"
                onChange={handleOnChange}
                placeholder='Search...'
                value={str}
                />
                </Col>
                               
               </Form.Group> 
        </Form>
    </div>
  )
}
