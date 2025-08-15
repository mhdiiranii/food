import Button from "../component/button";

const Card = ({
   type, 
   src, 
   name, 
   remaining, 
   off = false, 
   discount = "?", 
   about = "",
   loc = "",
   price = ""
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
        <h6>{loc}</h6>
        <h6>{price}</h6>
      </div>
    );
  }
};

export default Card;
