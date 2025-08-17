import Button from "../button";
import one from "../../assets/search-food/one.png";
import two from "../../assets/search-food/two.png";
import three from "../../assets/search-food/three.png";
import four from "../../assets/search-food/four.png";
import five from "../../assets/search-food/five.png";
import six from "../../assets/search-food/six.png";
import { Items, Slider } from "../slider";
import Card from "../card";
import iconOne from "../../assets/search-food/svg/icon-one.svg";
import iconTwo from "../../assets/search-food/svg/icon-two.svg";
import iconThree from "../../assets/search-food/svg/icon-three.svg";

const searchItems = [
  {
    id: 1,
    src: one,
    name: "Pizza",
  },
  {
    id: 2,
    src: two,
    name: "Burger",
  },
  {
    id: 3,
    src: three,
    name: "Noodles",
  },
  {
    id: 4,
    src: four,
    name: "Sub-sandiwch",
  },
  {
    id: 5,
    src: five,
    name: "Chowmein",
  },
  {
    id: 6,
    src: six,
    name: "Steak",
  },
];

const features = [
  {
    id: 1,
    src: iconOne,
    partOne: "Daily",
    partTwo: "Discounts",
  },
  {
    id: 2,
    src: iconTwo,
    partOne: "Daily",
    partTwo: "Discounts",
  },
  {
    id: 3,
    src: iconThree,
    partOne: "Daily",
    partTwo: "Discounts",
  },
];

const SearchFood = () => {
  return (
    <div className="search-food">
      <div className="part-one">
        <div className="part-one-top">
          <h4>Search by Food</h4>
          <div className="part-one-top-btn">
            <Button className={"button-view-search"}>View All {">"}</Button>
            <div className="button">
              <Button className={"slider-item-left"}>{"<"}</Button>
              <Button className={"slider-item-right"}>{">"}</Button>
            </div>
          </div>
        </div>
        <Slider boxClass={"search-food-slide"} direction={false}>
          {searchItems.map((item) => (
            <>
              <Items key={item.id}>
                <Card type={"search-item"} src={item.src} name={item.name} />
              </Items>
            </>
          ))}
        </Slider>
      </div>
      <div className="part-two">
        <div className="part-two-features">
          {features.map((item) => (
            <div key={item.id}>
              <Card type={"search-features"} src={item.src} partOne={item.partOne} partTwo={item.partTwo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFood;
