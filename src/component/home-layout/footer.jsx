import Button from "../button";
import one from "../../assets/footer/1.svg";
import two from "../../assets/footer/2.svg";
import three from "../../assets/footer/3.svg";
import Images from "../image";

const citys = [
  {
    id: 1,
    name: "San Francisco",
  },
  {
    id: 2,
    name: "Los Angeles",
  },
  {
    id: 3,
    name: "New York City",
  },
  {
    id: 4,
    name: "Chicago",
  },
  {
    id: 5,
    name: "Columbus",
  },
  {
    id: 6,
    name: "Miami",
  },
  {
    id: 7,
    name: "Washington DC",
  },
  {
    id: 8,
    name: "Orange County",
  },
  {
    id: 9,
    name: "Phoenix",
  },
  {
    id: 10,
    name: "New Mexico",
  },
  {
    id: 11,
    name: "San Diego",
  },
  {
    id: 12,
    name: "San Diego",
  },
  {
    id: 13,
    name: "Atlanta",
  },
  {
    id: 14,
    name: "Las Vegas",
  },
  {
    id: 15,
    name: "Albuquerque",
  },
  {
    id: 16,
    name: "East Bay",
  },
  {
    id: 17,
    name: "Portland",
  },
  {
    id: 18,
    name: "Charlotte",
  },
  {
    id: 19,
    name: "Sacramento",
  },
  {
    id: 20,
    name: "Sacramento",
  },
  {
    id: 21,
    name: "Long Beach",
  },
  {
    id: 22,
    name: "Nashville",
  },
  {
    id: 23,
    name: "Denver",
  },
  {
    id: 24,
    name: "Oklahoma City",
  },
  {
    id: 25,
    name: "New Orleans",
  },
];

const companys = [
  {
    id: 1,
    name: "About us",
  },
  {
    id: 2,
    name: "Team",
  },
  {
    id: 3,
    name: "Careers",
  },
  {
    id: 4,
    name: "Blog",
  },
];

const contacts = [
  {
    id: 1,
    name: "Help & Support",
  },
  {
    id: 2,
    name: "Partner with us ",
  },
  {
    id: 3,
    name: "Ride with us",
  },
];

const legals = [
  {
    id: 1,
    name: "Terms & Conditions",
  },
  {
    id: 2,
    name: "Refund & Cancellation",
  },
  {
    id: 3,
    name: "Privacy Policy",
  },
  {
    id: 4,
    name: "Cookie Policy",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <h6 className="footer-top-h6">Our top cities</h6>
        <div className="footer-top-citys">
          {citys.map((item) => (
            <a className="footer-top-citys-link" key={item.id} disabled href="/">
              {item.name}
            </a>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-menu">
          <div className="footer-bottom-menu-heading">
            <div className="footer-bottom-menu-heading-ds">
              <h3>Company</h3>
              <div className="footer-bottom-menu-heading-ds-item">
                {companys.map((item) => (
                  <a className="footer-top-citys-link" key={item.id} disabled href="/">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="footer-bottom-menu-heading-ds">
              <h3>Contact</h3>
              <div className="footer-bottom-menu-heading-ds-item">
                {contacts.map((item) => (
                  <a className="footer-top-citys-link" key={item.id} disabled href="/">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="footer-bottom-menu-heading-ds">
              <h3>Legal</h3>
              <div className="footer-bottom-menu-heading-ds-item">
                {legals.map((item) => (
                  <a className="footer-top-citys-link" key={item.id} disabled href="/">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-bottom-title-about"></div>
        </div>
        <div className="footer-bottom-follow">
          <h6>Follow Us</h6>
          <div className="footer-bottom-follow-icons">
            <Images src={one} alt="image" width={20} height={20} />
            <Images src={two} alt="image" width={20} height={20} />
            <Images src={three} alt="image" width={20} height={20} />
          </div>
          <p>Receive exclusive offers in your mailbox</p>
          <div className="footer-bottom-follow-sub">
            <input type="text" />
            <Button className={"button-footer"}>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
