import hamburger from '../../assets/nav/borger-icon.svg'
import mapMarker from '../../assets/nav/map-marker.svg'
import Button from '../button';
import Images from '../image';
import Search from '../search';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-icon">
        <Images src={hamburger} alt="borger" className='image'/>
        <div className='caption'>
            <h6>
                food
            </h6>
            <h6>
                wagon
            </h6>
        </div>
      </div>
      <div className="nav-title">
        <p>Deliver to:</p>
        <Images src={mapMarker} alt="map" className='map-image'/>
        <p>Current Location</p>
        <p>Mohammadpur Bus Stand, Dhaka</p>
      </div>
      <div className="nav-btn">
        <Search/>
        <Button className={"btn-login"}>
          login
        </Button>
      </div>
    </div>
  );
};

export default Nav;
