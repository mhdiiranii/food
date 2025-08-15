import Card from "../card";
import one from "../../assets/work/one.svg";
import two from "../../assets/work/two.svg";
import three from "../../assets/work/three.svg";
import four from "../../assets/work/four.svg";

const icon = [
  {
    id: 1,
    src: one,
    title: "Select location",
    about: "Choose the location where your food will be delivered.",
  },
  {
    id: 2,
    src: two,
    title: "Choose order",
    about: "Check over hundreds of menus to pick your favorite food",
  },
  {
    id: 3,
    src: three,
    title: "Pay advanced",
    about: "It's quick, safe, and simple. Select several methods of payment",
  },
  {
    id: 4,
    src: four,
    title: "Enjoy meals",
    about: "Food is made and delivered directly to your home.",
  },
];

const Work = () => {
  return (
    <div className="work">
      <div className="work-box">
        <div className="work-box-title">
          <h4>How does it work</h4>
        </div>
        <div className="work-box-cards">
          {icon.map((item) => (
            <div key={item.id}>
              <Card type={"work"} src={item.src} name={item.title} about={item.about} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
