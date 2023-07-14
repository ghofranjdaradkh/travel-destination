
import './Tours.css'
import Tour from "./ tour/Tour"


function Tours(props) {
  //I recived  data named tour as props then I map through data inside the Tours
  return (
    
     props.tour.map((obj,i)=>
      <div className='tour'>
      <Tour  key={i} tour={obj} />



      </div>
    

  
    // console.log(tour)

  ))
}





export default Tours