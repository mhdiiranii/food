import Button from "./button";

const Items = ({ children, key = false }) => {
  return (
    <div key={key} className="items">
      {children}
    </div>
  );
};

const Slider = ({ children, direction = true, props , boxClass }) => {
  return (
    <div className={`slider`} {...props}>
      <div className={`slider-box ${boxClass}`}>{children}</div>
      {direction && (
        <>
          <div className="slider-btn">
            <Button className={"slider-item-left"}>{"<"}</Button>
            <Button className={"slider-item-right"}>{">"}</Button>
          </div>
        </>
      )}
    </div>
  );
};

export { Items, Slider };
