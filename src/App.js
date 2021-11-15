import './App.css';
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar';
import { CarouselData } from './components/slider/CarouselData';
import ImageCarousel from './components/slider/ImageCarousel';
import MainPageText from './pages/MainPageText/MainPageText';

function App() {
  return (
    <div className="page-container">
      <Navbar/>
      <ImageCarousel slides={CarouselData}/>
      <MainPageText/>
      <Footer/>
    </div>
  );
}

export default App;
