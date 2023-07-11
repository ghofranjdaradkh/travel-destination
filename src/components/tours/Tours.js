
import './Tours.css'
import db from '../../data/db.json';



function Tours(props) {
  return (
    <div>
      {db.map((obj, i) => (
        <div key={i} className="div">
          <h3>{obj.name}</h3>
          <img src={obj.image} alt={obj.alt} style={{ width: '500px', height: '500px' }}/>
        </div>
      ))}
    </div>
  );
}















  //   return (
  //     <div>
  //       {db.map((obj, i) => (
  //         <div className="div" >
  //           <Home  key={i} name={obj.name} image={obj.image} />
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }
        
    //     <div className='tour'>
    //     <h1> {props.name}</h1>
    //     <img src={props.image}  style={{ width: '500px', height: '500px' }} />
    //     </div>
    // )

export default Tours