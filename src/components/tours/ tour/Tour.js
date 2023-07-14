import './Tour.css'
import { Link } from "react-router-dom";


function Tour(props) {
  //I recived it as props then I map through data inside the Tours
  return (
    <>


      <div className="div">
        <Link to={`/city/${props.tour.id}`} >
          {/* make link when i click in the name or in the picture or can i wrap link just on the name */}
          <h3>{props.tour.name}</h3>
          <img src={props.tour.image} alt={props.tour.alt} style={{ width: '400px', height: '400px' }} />
        </Link>

      </div>


    </>

  );

}
export default Tour