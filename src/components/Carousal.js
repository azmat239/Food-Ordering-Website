import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Carousal = () => {
  return (
    <div className="relative top-0 z-0">
      <Carousel
        showStatus={false}
        autoPlay
        interval="2000"
        transitionTime="1000"
        showThumbs={false}
        infiniteLoop
        showArrows={false}
        className="rounded-lg shadow-2xl"
      >
        <div>
          <img
            src="https://source.unsplash.com/random/1920x1080/?burger"
            alt="not found"
            className="h-[95vh] w-screen shadow-2xl"
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/random/1920x1080/?sandwich"
            alt="not found"
            className="h-[95vh] w-screen shadow-2xl"
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/random/1920x1080/?pizza"
            alt="not found"
            className="h-[95vh] w-screen shadow-2xl"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousal;
