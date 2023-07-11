import Header from "../header/Header";
import Footer from "../footer/ Footer"
import Tours from "../tours/Tours"
import db from '../../data/db.json';



function Home() {

  return (
    <>
      <Header />

      <Tours  data={db} />

      <Footer />

    </>)
}






export default Home