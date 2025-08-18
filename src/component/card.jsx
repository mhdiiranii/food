import Button from "../component/button";
import map from "../assets/nav/map-marker.svg";
import star from "../assets/featured/star-icon.svg";
import clouck from "../assets/featured/time.svg";
import Images from "./image";
import RenderImage from "./render-image";

const Card = ({
  type,
  src,
  name,
  remaining,
  off = false,
  discount = "?",
  about = "",
  loc = "",
  price = "",
  featuredOffer,
  timeing,
  resturantIcon,
  resturantName,
  startRate,
  cheack,
  cheackTitle,
  partOne,
  partTwo,
  captions,
}) => {

  if (type == "offer") {
    return (
      <div className="card">
        <div className="card-box">
          {off && (
            <div className="card-box-offer">
              <h2>{discount}</h2>
            </div>
          )}
          <RenderImage src={src} alt="#" className="card-box-image" loaderStyle={'card-box-loader'}/>
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
          <RenderImage src={src} alt="#" className="work-card-frame-image" loaderStyle={'work-card-frame-loader'}/>
        </div>
        <h6 className="work-card-title">{name}</h6>
        <p className="work-card-about">{about}</p>
      </div>
    );
  }

  if (type == "popular-item") {
    return (
      <div className="popular-item">
        <RenderImage src={src} alt="#" className="popular-item-image" loaderStyle={'popular-item-loader'}/>
        <h6>{name}</h6>
        <div className="popular-item-loc">
          <RenderImage src={map} alt="map" loaderStyle={'popular-item-loc-loader'}/>
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
                <RenderImage src={clouck} alt="clouck" loaderStyle={'box-loader'}/>
                <h6>{timeing}</h6>
              </div>
            </Button>
          </div>
          <RenderImage src={src} alt="" className="featured-card-image-image" loaderStyle={'featured-card-image-loader'}/>
        </div>
        <div className="featured-card-about">
          <RenderImage src={resturantIcon} alt="" className="featured-card-about-icon" loaderStyle={'featured-card-about-loader'}/>
          <div className="featured-card-about-title">
            <h6 className="featured-card-about-title-h6">{resturantName}</h6>
            <div className="featured-card-about-title-star">
              <RenderImage src={star} alt="star" loaderStyle={'featured-card-about-title-star-loader'}/>
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

  if (type == "search-item") {
    return (
      <div className="search-item">
        <RenderImage src={src} alt="image" loaderStyle={'search-item-loader'}/>
        <h6>{name}</h6>
      </div>
    );
  }

  if (type == "search-features") {
    return (
      <div className="search-features-box">
        <RenderImage src={src} alt="image" loaderStyle={'search-features-box-loader'}/>
        <div className="search-features-box-title">
          <h5>{partOne}</h5>
          <h5>{partTwo}</h5>
        </div>
      </div>
    );
  }

  if (type == "details") {
    return (
      <div className="card-details">
        <RenderImage src={src} alt="image" className="card-details-img" loaderStyle={'card-details-loader'}/>
        <div className="card-details-box">
          <div className="card-details-box-title">
            <h4>{captions}</h4>
            <p>{about}</p>
          </div>
          <Button className={'button-details'} >
            Proceed to order {'>'}
          </Button>
        </div>
      </div>
    );
  }
};

export default Card;
