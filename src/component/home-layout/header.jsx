import Button from "../../component/button";
import food from "../../assets/header/food-header.png";
import { lazy, Suspense } from "react";
// import Images from "../image";
import RenderImage from '../render-image'


const Images = lazy(()=> import('../image'))
 
const Header = () => {
  return (
    <div className="header">
      <div className="header-box">
        <div className="header-box-title">
          <h1>Are you starving?</h1>
          <h6>Within a few clicks, find meals that are accessible near you</h6>
        </div>
        <div className="header-box-search">
          <div className="btn">
            <Button className={"btn-delivery"}>Delivare</Button>
            <Button className={"btn-pickup"}>Pickup</Button>
          </div>
          <span className="span"></span>
          <div className="find">
            <input type="text" placeholder="Enter Your Address" className="find-input"/>
            <div className="find-box">
              <Button className={'find-btn'}>Find Food</Button>
            </div>
          </div>
        </div>
      </div>
      {/* <Suspense className fallback = {<div>loading........</div>}>
        <Images src={food} alt="food" className="header-food-image"/>
      </Suspense> */}
      <RenderImage src={food} alt="food" className="header-food-image" loaderStyle={'header-food-loader'}/>
      
    </div>
  );
};

export default Header;
