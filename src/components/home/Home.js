
import Tours from "../tours/Tours"
import data from "../../data/db.json"




function Home() { 
 



  return (
    <>
      

      <Tours  tour={data} /> 
      {/* I pass aS props to the Tours */}
     


    </>)
}






export default Home