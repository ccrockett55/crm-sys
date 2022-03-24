
import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { Entry } from './page/entry/Entry.page';

function App() {
  return (
    <div className="bg2">
      <Header />
      <Entry />
      <Footer />
    </div>
  );
}

export default App;
