
import './App.css';
import Home from "../src/components/home/Home"
import db from "../src/data/db.json";
import { Routes, Route } from 'react-router';
import Header from './components/header/Header';
import Footer from './components/footer/ Footer';
import Navbar from './components/Navbar/Navbar';
import TourDetails from './components/TourDetails/TourDetails';


function App() {
  return (
    <>
      <Header />
      <Routes routes={Navbar}>

        <Route path="/" element={<Home />}>Home</Route>

        <Route path="/city/:id" element={<TourDetails data={db} />} />


      </Routes>
      <Footer />
    </>

  );
}

export default App;
