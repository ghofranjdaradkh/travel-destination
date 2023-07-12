
import { useState } from "react"
import { useParams } from "react-router"
import "./TourDetails.css"



function TourDetails(props) {
    const [seeMore, setSeeMore] = useState(false)// it took two values >> value and function updated the state based on 
    const { id } = useParams()

    function handelClick() {
        setSeeMore(!seeMore) //inverter 
    }


    function handleDetails() {
        return props.data.find((data) => data.id === id);//returns the first element that meets the condition 
    }

    const cityData = handleDetails()



    return (
        <div className="card">


            <h2>{cityData.name}</h2>
            <img  src={cityData.image } style={{ width: '500px', height: '500px' }} />
            <h4>{cityData.price}</h4>
            <p>
                {seeMore ? cityData.info : cityData.info.slice(0, 250) + "..."}
            </p>
            <button onClick={handelClick}>{seeMore ? "seeLess" : "seeMore"}</button>


        </div>

    )
}

export default TourDetails