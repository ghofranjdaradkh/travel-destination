
import Tours from "../tours/Tours"
import data from "../../data/db.json"

import'./Home.css'




function Home() { 
 



  return (
    <div className="home">
     

      <Tours  tour={data} /> 
      {/* I pass aS props to the Tours */}
     


    </div>)
}






export default Home