import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import addone from "./addone.jpg";
import addtwo from "./addtwo.jpg";
import addthree from "./addthree.jpg";

const Banner = () => {
    return (
        <div className="realtive bg-gradient-to-b from-blue-600 to-blue-100 z-0">
            <Carousel className="md:mx-40 z-0"  autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={4000}>
              <div>
                  <img src={addone}  />
              </div>
              <div>
              <img src={addtwo} />
              </div>
              <div>
              <img src={addthree} />
              </div>
            </Carousel>
            
        </div>
    )
}

export default Banner;
