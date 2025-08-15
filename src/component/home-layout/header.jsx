import Button from "../../component/button";
import food from "../../assets/header/food-header.png";

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
            {/* <img src={food} alt="food" /> */}
            <div className="find-box">
              <Button className={'find-btn'}>Find Food</Button>
            </div>
          </div>
        </div>
      </div>
      <img src={food} alt="food" className="header-food-image" />
    </div>
  );
};

export default Header;
