
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Dashboard from './page/dashboard/Dashboard';
import { Entry } from './page/entry/Entry.page';
import { CreateTicket } from './page/new-ticket/CreateTicket';
import { TicketList } from './page/ticket-listing/TicketList';
import { Ticket } from './page/ticket/Ticket.page';

function App() {
  return (
    <div>
      <Header />
     {/* <Entry /> */}
      {/* <Dashboard /> */}
      {/*<CreateTicket /> */}
      {/*<TicketList /> */}
       <Ticket />
     
      <Footer />
    </div>
  );
}

export default App;
