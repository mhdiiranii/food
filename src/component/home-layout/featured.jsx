import Button from "../button";
import Card from "../card";
import one from "../../assets/featured/png/one.png";
import two from "../../assets/featured/png/two.png";
import three from "../../assets/featured/png/three.png";
import four from "../../assets/featured/png/four.png";
import five from "../../assets/featured/png/five.png";
import six from "../../assets/featured/png/six.png";
import seven from "../../assets/featured/png/seven.png";
import eight from "../../assets/featured/png/eight.png";
import iconOne from "../../assets/featured/svg/icon-one.svg";
import iconTwo from "../../assets/featured/svg/icon-two.svg";
import iconThree from "../../assets/featured/svg/icon-three.svg";
import iconFour from "../../assets/featured/svg/icon-four.svg";
import iconFive from "../../assets/featured/svg/icon-five.svg";
import iconSix from "../../assets/featured/svg/icon-six.svg";
import iconSeven from "../../assets/featured/svg/icon-seven.svg";
import iconEight from "../../assets/featured/svg/icon-eight.svg";



const cards = [
  {
    id: 1,
    cheack: "tomorrow",
    resturantName: "Foodworld",
    featuredOffer: "20% off",
    timeing: "fast",
    src: one,
    resturantIcon: iconOne,
    startRate: "46",
    cheackTitle: "open tomorrow",
  },
  {
    id: 2,
    cheack: "tomorrow",
    resturantName: "Pizzahub",
    featuredOffer: "15% off",
    timeing: "fast",
    src: two,
    resturantIcon: iconTwo,
    startRate: "40",
    cheackTitle: "open tomorrow",
  },
  {
    id: 3,
    cheack: "open",
    resturantName: "Donuts hut",
    featuredOffer: "10% off",
    timeing: "fast",
    src: three,
    resturantIcon: iconThree,
    startRate: "20",
    cheackTitle: "open now",
  },
  {
    id: 4,
    cheack: "open",
    resturantName: "Donuts hut",
    featuredOffer: "15% off",
    timeing: "fast",
    src: four,
    resturantIcon: iconFour,
    startRate: "50",
    cheackTitle: "open now",
  },
  {
    id: 5,
    cheack: "open",
    resturantName: "Ruby Tuesday",
    featuredOffer: "10% off",
    timeing: "fast",
    src: five,
    resturantIcon: iconFive,
    startRate: "26",
    cheackTitle: "open now",
  },
  {
    id: 6,
    cheack: "open",
    resturantName: "Kuakata Fried Chicken",
    featuredOffer: "25% off",
    timeing: "fast",
    src: six,
    resturantIcon: iconSix,
    startRate: "53",
    cheackTitle: "open now",
  },
  {
    id: 7,
    cheack: "open",
    resturantName: "Red Square",
    featuredOffer: "10% off",
    timeing: "fast",
    src: seven,
    resturantIcon: iconSeven,
    startRate: "45",
    cheackTitle: "open now",
  },
  {
    id: 8,
    cheack: "open",
    resturantName: "Taco Bell",
    featuredOffer: "10% off",
    timeing: "fast",
    src: eight,
    resturantIcon: iconEight,
    startRate: "35",
    cheackTitle: "open now",
  },
];

const Featured = () => {
  return (
    <div className="featured">
      <h4 className="featured-h4">Featured resturant</h4>
      <div className="featured-box">
        <div className="featured-box-grid">
          {cards.map((item) => (
            <Card
              type={"featured-cards"}
              src={item.src}
              startRate={item.startRate}
              cheack={item.cheack}
              cheackTitle={item.cheackTitle}
              resturantIcon={item.resturantIcon}
              timeing={item.timeing}
              resturantName={item.resturantName}
              featuredOffer={item.featuredOffer}
            />
          ))}
        </div>
      </div>
      <Button className={'button-view'}>View All {">"}</Button>
    </div>
  );
};

export default Featured;
