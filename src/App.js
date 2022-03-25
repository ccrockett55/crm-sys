
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Dashboard from './page/dashboard/Dashboard';
import { Entry } from './page/entry/Entry.page';

function App() {
  return (
    <div>
      <Header />
     {/* <Entry /> */}
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
