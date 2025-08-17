import Nav from "../component/home-layout/navBar";
import Header from "../component/home-layout/header"
import Offer from "../component/home-layout/offer";
import Work from "../component/home-layout/how-work";
import Popular from "../component/home-layout/popular";
import Featured from "../component/home-layout/featured";
import SearchFood from "../component/home-layout/searchFood";
import AppDw from "../component/home-layout/app-download";
import Details from "../component/home-layout/details";
import Cta from "../component/home-layout/cta";

const Home = () => {
    return ( 
        <div className="box">
            <Nav/>
            <Header/>
            <Offer/>
            <Work/>
            <Popular/>
            <Featured/>
            <SearchFood/>
            <AppDw/>
            <Details/>
            <Cta/>
        </div>
     );
}
 
export default Home;