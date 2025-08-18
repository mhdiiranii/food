import { lazy, Suspense } from "react";

// const Images = lazy(() => import("./image"));
const Images = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./image")), 10000); // ۳ ثانیه تاخیر
  });
});

const Loader = ({className})=>{
    return(
        <div className={`loader ${className}`}>
        </div>
    )
}

const RenderImage = ({loaderStyle,...props}) => {
  return (
    <div className="render">
      <Suspense className fallback={<Loader className={loaderStyle}/>}>
        <Images {...props}/>
      </Suspense>
    </div>
  );
};

export default RenderImage;
