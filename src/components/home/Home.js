import Header from "../header/Header";
import Footer from "../footer/ Footer"
import Tours from "../tours/Tours"
import db from '../../data/db.json';



function Home (){
    return (
        <>
        <Header/>
        {db.map((obj, i) => (
            <div className="div"> <Tours key={i} name={obj.name} image={obj.image}/></div>)
       )}
        <Footer/>


        </>
    )
}
export default Home