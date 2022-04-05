import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PageBreadcrumbs } from '../../components/layout/Breadcrumbs';
import tickets from '../../assets/data/dummy-tickets.json';
import { MessageHistory } from '../../components/message-history/MessageHistory';
import { UpdateTicket } from '../../components/message-history/UpdateTicket';


const ticket = tickets[0];
export const Ticket = () => {
    const [message, setMessage] = useState('');
    useEffect(() => {

    }, [message]);

    const handleOnChange = e => {
        setMessage(e.target.value);
    }

    const handleOnSubmit = () => {
        alert('Form Submitted');
    }

  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <PageBreadcrumbs page='Ticket' />
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className='subject'>Subject: {ticket.subject}</div>
                    <div className='date'>Ticket Opened: {ticket.addedAt}</div>
                    <div className='status'>Status: {ticket.status}</div>
                    
                </Col>
                <Col className='text-right'>
                    <Button variant='outline-info'>Close Ticket</Button>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                <MessageHistory msg= {ticket.history} />
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                <UpdateTicket msg={message} 
                              handleOnChange={handleOnChange} 
                              handleOnSubmit={handleOnSubmit}
                              />
                </Col>
            </Row>
            <div className='spacer'></div>
        </Container>
    </div>
  )
}
