// import './tour.css'

import TourDetails from "../../TourDetails/TourDetails";

import { Link } from "react-router-dom";


function Tour(props) {
  //I recived it as props then I map through data inside the Tours
  return (
    <>
      
      {props.tour.map((obj, i) => (
        <div key={i} className="div">
          <Link to={`/city/${obj.id}`}>
            <h3>{obj.name}</h3>
          </Link>
          <img src={obj.image} alt={obj.alt} style={{ width: '500px', height: '500px' }} />

        </div>

      ))}
    </>

  );

}
export default Tour