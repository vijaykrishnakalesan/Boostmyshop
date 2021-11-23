import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Pricelist from './Components/Pricelist';
import Brands from './Components/Brands';
import Testimonials from './Components/Testimonials';
import Faq from './Components/Faq';

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <Pricelist/>
     <Brands/>
     <Testimonials/>
     <Faq/>

    </div>
  );
}

export default App;
