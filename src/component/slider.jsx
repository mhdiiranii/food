import Button from "./button";

const Items = ({ children,key=false }) => {
  return <div key={key} className="items">{children}</div>;
};

const Slider = ({ children }) => {
  return (
    <div className="slider">
      <div className="slider-box">
        {children}
      </div>
      <div className="slider-btn">
        <Button className={"slider-item-left"}>{"<"}</Button>
        <Button className={"slider-item-right"}>{">"}</Button>
      </div>
    </div>
  );
};

export { Items, Slider };
