import Card from "../card";
import one from "../../assets/detail/one.png";
import two from "../../assets/detail/two.png";
import three from "../../assets/detail/three.png";

const images = [
  {
    id: 1,
    src: one,
    captions: "Best deals Crispy Sandwiches",
    about: "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches",
  },
  {
    id: 2,
    src: two,
    captions: "Celebrate  parties with Fried Chicken",
    about: "Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.",
  },
  {
    id: 3,
    src: three,
    captions: "Wanna eat hot & spicy Pizza?",
    about: "Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.",
  },
];

const Details = () => {
  return (
    <div className="details">
      <div className="details-box">
        {images.map((item) => (
          <div className="details-box-item" key={item.id}>
            <Card type={"details"} src={item.src} captions={item.captions} about={item.about} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
