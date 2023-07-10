
import './Tours.css'
function Tours(props){
    return (
        <div className='tour'>
        <h1> {props.name}</h1>
        <img src={props.image}  style={{ width: '500px', height: '500px' }} />
        </div>
    )
}
export default Tours