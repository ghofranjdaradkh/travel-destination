
import { useState } from "react"
import { useParams } from "react-router"
import "./TourDetails.css"
 




function TourDetails(props) {
    const [seeMore, setSeeMore] = useState(true)// it took two values >> value and function updated the state based on 
    const { id } = useParams() // use params>> allowing components to receive dynamic data based on the URL

    function handelClick() { //this function to update state ,,I can use it as callback fun in onclick event
        setSeeMore(!seeMore) //inverter 
    }


    function handleDetails() {// this function to handle data based on pramas value
        return props.data.find((data) => data.id === id);//returns the first element that meets the condition 
    }

    const cityData = handleDetails() 



    return (
        
        <div className="card">

      


            <h2>{cityData.name}</h2>
            <img  src={cityData.image }  alt={cityData.name} style={{ width: '390px', height: '390px' }} />
            <h4>{cityData.price}</h4>
            <p>
                {seeMore ?  cityData.info.slice(0, 250) + "...":cityData.info }
                {/* if true as the initial value show me the first choose ,if no show me the second  */}
            </p>
            <button  style={seeMore?{backgroundColor:"#B0DAFF"}:{backgroundColor:"#FEFF86"} }onClick={handelClick}>{seeMore ? "seeMore" : "seeLess"}</button>

        
        </div>

    )
}

export default TourDetails