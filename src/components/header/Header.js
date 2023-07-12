import { Link } from "react-router-dom";
import Home from "../home/Home";
import"./Header.css";
import { Routes,Route } from 'react-router';
import Navbar from "../Navbar/Navbar";
// import Home from "../home/Home";


 


function Header(props) {
    return(
<>
<h1 className="header">
Travel Destination       
</h1>
<Navbar className="navBar"/>

</>
       
    )
    
}
export default Header