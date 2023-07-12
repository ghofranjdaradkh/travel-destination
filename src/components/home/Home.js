import Header from "../header/Header";
import Footer from "../footer/ Footer"
import Tours from "../tours/Tours"
import { Route } from "react-router";

import data from "../../data/db.json"
import TourDetails from "../TourDetails/TourDetails";



function Home() { 
  //I recived it as props



  return (
    <>
      {/* <Header /> */}

      <Tours  tour={data} /> 
      {/* I pass again to the Tours */}
     
{/* <TourDetails /> */}
      {/* <Footer /> */}

    </>)
}






export default Home