import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Carousal = () => {
  return (
    <div className="m-4">
      <Carousel
        showStatus={false}
        autoPlay
        interval="5000"
        transitionTime="1000"
        showThumbs={false}
        infiniteLoop
      >
        <div>
          <img
            src="https://source.unsplash.com/random/900%C3%97700/?burger"
            alt="not found"
            className="h-[110vh] rounded-lg shadow-2xl"
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/random/900%C3%97700/?momos"
            alt="not found"
            className="h-[110vh] rounded-lg shadow-2xl"
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/random/900%C3%97700/?pizza"
            alt="not found"
            className="h-[110vh] rounded-lg shadow-2xl"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousal;
