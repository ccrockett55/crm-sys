import React, {useState, useEffect} from 'react'
import { PageBreadcrumbs } from '../../components/layout/Breadcrumbs'
import { SearchForm } from '../../components/search-form/SearchForm'
import {TicketTable} from '../../components/ticket-table/TicketTable'
import tickets from '../../assets/data/dummy-tickets.json'

export const TicketList = () => {

    const [str, setStr] = useState('');
    const [dispTicket, setDisplayTicket] = useState(tickets);

    useEffect(() => {}, [str, dispTicket]);
    

    const handleOnChange = (e) => {
        const {value} = e.target
        setStr(value);
        searchTicket(value);
    };

    const searchTicket = (sttr) => {

        const displayTicket = tickets.filter(row=> row.subject.toLowerCase().includes(sttr.toLowerCase()))

        setDisplayTicket(displayTicket)
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
            <PageBreadcrumbs page='Ticket List' />
            </div>

        </div>
        <div className='row mt-4'>
            <div className='col'>
            <button className='btn btn-primary' variant='info'>Add New Ticket</button>
            
            </div>
            <div className='col text-right'>
            <SearchForm handleOnChange={handleOnChange} str={str}/>
            </div>
        </div>
        <div className='row mt-4'>
            <div className='col'>
                <TicketTable tickets={dispTicket}/>
            </div>
        </div>
    </div>
  )
}
