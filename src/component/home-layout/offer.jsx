import one from "../../assets/offer/one.png";
import two from "../../assets/offer/two.png";
import three from "../../assets/offer/three.png";
import four from "../../assets/offer/four.png";
import Card from "../card";

const offerData = [
  {
    id: 1,
    src: one,
    alt: "Greys Vage",
    name: "Greys Vage",
    remaining: "6 Days Remaining",
    off: "15%",
  },
  {
    id: 2,
    src: two,
    alt: "Greys Vage",
    name: "Greys Vage",
    remaining: "6 Days Remaining",
    off: "10%",
  },
  {
    id: 3,
    src: three,
    alt: "Greys Vage",
    name: "Greys Vage",
    remaining: "7 Days Remaining",
    off: "25%",
  },
  {
    id: 4,
    src: four,
    alt: "Greys Vage",
    name: "Greys Vage",
    remaining: "8 Days Remaining",
    off: "20%",
  },
];

const Offer = () => {

  return (
    <div className="offer">
      <div className="offer-box">
        {offerData?.map((item) => (
          <div key={item.id}>
            <Card type={'offer'} src={item.src} name={item.name} remaining={item.remaining} off={true} discount={item.off}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
