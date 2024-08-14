import { Router, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import SwiperComponent from './components/SwiperComponents/SwiperComponents';
import Shop from './components/Shop/Shop';
import Reser from './components/Reser/Reser';

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <SwiperComponent/>
    <Shop/>
    <Reser/>
    </>
  );
}

export default App;

