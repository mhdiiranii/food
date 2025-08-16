import Nav from "../component/home-layout/navBar";
import Header from "../component/home-layout/header"
import Offer from "../component/home-layout/offer";
import Work from "../component/home-layout/how-work";
import Popular from "../component/home-layout/popular";
import Featured from "../component/home-layout/featured";

const Home = () => {
    return ( 
        <div className="box">
            <Nav/>
            <Header/>
            <Offer/>
            <Work/>
            <Popular/>
            <Featured/>
        </div>
     );
}
 
export default Home;