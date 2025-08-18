import phone from "../../assets/app-dw/phone.svg";
import Button from "../button";
import googlePlay from "../../assets/app-dw/google-play.svg";
import appStore from "../../assets/app-dw/app-store.svg";
import Images from "../image";
import RenderImage from "../render-image";

const AppDw = () => {
  return (
    <div className="app-dw">
      <RenderImage src={phone} alt="phone" className="app-dw-img" loaderStyle={'app-dw-loader'}/>
      <div className="app-dw-title">
        <h2 className="app-dw-title-h2">Install the app</h2>
        <p className="app-dw-title-p">It's never been easier to order food. Look for the finest discounts and you'll be lost in a world of delectable food.</p>
        <div className="app-dw-title-store">
          <Button className={"button-store"}>
            <Images  src={googlePlay} alt="google-play"/>
            <div className="button-store-box">
              <p className="button-store-box-p1">Get it on</p>
              <p className="button-store-box-p2">Google Play</p>
            </div>
          </Button>
          <Button className={"button-store"}>
            <Images  src={appStore} alt="app-store"/>
            <div className="button-store-box">
              <p className="button-store-box-p1">Download on the</p>
              <p className="button-store-box-p2">App Store</p>
            </div>
          </Button>
        </div>
      </div>
      <svg viewBox="0 0 1440 320" class="wave">
        <path fill="#ff9900" d="M0,170L480,241L960,250L1440,224L1440,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default AppDw;
