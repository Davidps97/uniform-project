import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  width:"100%",
  marginTop: "2em",
  height: "35em",
  color: "#fff",
  lineHeight: "55em",
  textAlign: "center",
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
          <div style={contentStyle}><img alt="" src={"/images/carrousel1.jpg"}></img></div>
        </div>
        <div>
          <div style={contentStyle}><img alt="" src={"/images/carrousel2.jpg"}></img></div>
        </div>
      </Carousel>
    </div>
  );
};
export default CarouselComponent;
