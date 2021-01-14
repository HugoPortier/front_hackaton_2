import Footer from'./components/Footer/Footer';
import './App.css';
import CardContainer from './components/CardContainer';

import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
