import './App.css';
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar';
import { CarouselData } from './components/slider/CarouselData';
import ImageCarousel from './components/slider/ImageCarousel';
import CoffeePage from './pages/CoffeePage/CoffeePage';
import MainPageText from './pages/MainPageText/MainPageText';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';


 function App() {
  return (
  <div className="page-container">
    <BrowserRouter>
        <Routes>
       <Route path ="/coffeePage" element={<CoffeePage/>} />
     </Routes> 
   </BrowserRouter>
        <Navbar/>
      <ImageCarousel slides={CarouselData}/>
      <MainPageText/>
      <Footer/> 
  </div>  
  );
}

export default App;
