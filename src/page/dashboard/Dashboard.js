import React from 'react';
import {TicketTable} from '../../components/ticket-table/TicketTable';
import tickets from '../../assets/data/dummy-tickets.json';
import { PageBreadcrumbs } from '../../components/layout/Breadcrumbs';

function Dashboard() {
  return (
   
   <div className='container'>
       <div className='row'>
        <div className='col mt-5'>
            <PageBreadcrumbs page="Dashboard" />
        </div>
        </div>
        <div className='row'>
            <div className='col text-center mt-5 mb-2'>

                <button variant='info' className='btn btn-secondary'>Add New Ticket</button>

            </div>

        </div>
        <div className='row'>
            <div className='col text-center mb-2'>

                <p>Total Tickets: 50</p>
                <p>Pending Tickets: 10</p>
            </div>

        </div>
        <div className='row'>
            <div className='col mb-2'>

                <p>Recently Added Tickets</p>
                
            </div>
        </div>

        <div className='row'>
            <div className='col recent-tkts mb-2'>

                <TicketTable tickets={tickets} />
                
            </div>

        </div>
       
    </div>
  )
}

export default Dashboard
