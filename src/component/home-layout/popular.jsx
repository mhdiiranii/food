import Button from "../button";
import Card from "../card";
import { Slider, Items } from "../slider";
import one from '../../assets/popular/one.png';
import two from '../../assets/popular/two.png';
import three from '../../assets/popular/three.png';
import four from '../../assets/popular/four.png';
import five from '../../assets/popular/five.png';

const popularItems = [
    {
        id:1,
        src:one,
        name : 'Cheese Burger',
        loc : 'Burger Arena',
        price : '$3.88'
    },
    {
        id:2,
        src:two,
        name : 'Toffe’s Cake',
        loc : 'Top Sticks',
        price : '$4.00'
    },
    {
        id:3,
        src:three,
        name : 'Dancake',
        loc : 'Cake World',
        price : '$1.99'
    },
    {
        id:4,
        src:four,
        name : 'Crispy Sandwitch',
        loc : 'Fastfood Dine',
        price : '$3.00'
    },
    {
        id:5,
        src:five,
        name : 'Thai  Soup',
        loc : 'Burger Arena',
        price : '$2.79'
    },
    
]
const Popular = () => {
  return (
    <div className="popular">
      <div className="popular-title">
        <h4 className="popular-title-heading">Popular Items</h4>
      </div>
      <Slider>
        {popularItems.map((item) => (
          <>
            <Items key={item.id}>
              <Card type={"popular-item"} src={item.src} name={item.name} loc={item.loc} price={item.price}/>
            </Items>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default Popular;
