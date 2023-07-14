
import './App.css';
import Home from "../src/components/home/Home"
import db from "../src/data/db.json";
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import TourDetails from './components/TourDetails/TourDetails';
import Footer from './components/footer/ Footer';
import Header from './components/header/Header';

function App() {
  return (
    <>
    <Header/>
      <Routes routes={Navbar}>

        <Route path="/" element={<Home />}>Home</Route>

        <Route path="/city/:id" element={<TourDetails data={db} />} />

      </Routes>
<Footer/>
    
    </>

  );
}

export default App;
