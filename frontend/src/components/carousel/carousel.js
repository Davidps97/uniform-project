import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  marginTop: "2em",
  height: "47em",
  color: "#fff",
  lineHeight: "55em",
  textAlign: "center",
  background: "#364d79",
  borderRadius:"50px",
};
const CarouselComponent = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}></h3>
        </div>
        <div>
          <h3 style={contentStyle}></h3>
        </div>
        <div>
          <h3 style={contentStyle}></h3>
        </div>
        <div>
          <h3 style={contentStyle}></h3>
        </div>
      </Carousel>
    </div>
  );
};
export default CarouselComponent;
