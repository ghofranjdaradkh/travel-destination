
import './Tours.css'
// import TourDetails from "../TourDetails/TourDetails"
import Tour from "./ tour/Tour"




function Tours(props) {
  //I recived  data named tour as props then I map through data inside the Tours
  return (
    <>
    
    
      <Tour  key={props.tour.id} tour={props.tour} />
    
    </>
    

  );
}





export default Tours