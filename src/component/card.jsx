import Button from "../component/button";
import map from "../assets/nav/map-marker.svg";
import star from "../assets/featured/star-icon.svg";
import clouck from "../assets/featured/time.svg";

const Card = ({ type, src, name, remaining, off = false, discount = "?", about = "", loc = "", price = "", featuredOffer, timeing, resturantIcon, resturantName, startRate, cheack, cheackTitle }) => {
  if (type == "offer") {
    return (
      <div className="card">
        <div className="card-box">
          {off && (
            <div className="card-box-offer">
              <h2>{discount}</h2>
            </div>
          )}
          <img src={src} alt="#" className="card-box-image" />
        </div>
        <h6>{name}</h6>
        <Button className={"button-remaining"}>{remaining}</Button>
      </div>
    );
  }

  if (type == "work") {
    return (
      <div className="work-card">
        <div className="work-card-frame">
          <div className="work-card-frame-animation"></div>
          <img src={src} alt="#" className="work-card-frame-image" />
        </div>
        <h6 className="work-card-title">{name}</h6>
        <p className="work-card-about">{about}</p>
      </div>
    );
  }

  if (type == "popular-item") {
    return (
      <div className="popular-item">
        <img src={src} alt="#" className="popular-item-image" />
        <h6>{name}</h6>
        <div className="popular-item-loc  ">
          <img src={map} alt="map" />
          <h6>{loc}</h6>
        </div>
        <h6>{price}</h6>
        <Button className={"button-order"}>Order Now</Button>
      </div>
    );
  }
  if (type == "featured-cards") {
    return (
      <div className="featured-card">
        <div className="featured-card-image">
          <div className="featured-card-image-btn">
            <Button className="btn-offer">{featuredOffer}</Button>
            <Button className={"btn-time"}>
              <div className="box">
                <img src={clouck} alt="clouck" />
                <h6>{timeing}</h6>
              </div>
            </Button>
          </div>
          <img src={src} alt="" className="featured-card-image-image" />
        </div>
        <div className="featured-card-about">
          <img src={resturantIcon} alt="" className="featured-card-about-icon" />
          <div className="featured-card-about-title">
            <h6 className="featured-card-about-title-h6">{resturantName}</h6>
            <div className="featured-card-about-title-star">
              <img src={star} alt="star" />
              <h6>{startRate}</h6> 
            </div>
          </div>
        </div>
        <div>
          <Button className={`button-cheack-${cheack}`}>{cheackTitle}</Button>
        </div>
      </div>
    );
  }
};

export default Card;
