
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Dashboard from './page/dashboard/Dashboard';
import { Entry } from './page/entry/Entry.page';
import { CreateTicket } from './page/new-ticket/CreateTicket';

function App() {
  return (
    <div>
      <Header />
     {/* <Entry /> */}
      {/* <Dashboard /> */}
      <CreateTicket />
      <Footer />
    </div>
  );
}

export default App;
