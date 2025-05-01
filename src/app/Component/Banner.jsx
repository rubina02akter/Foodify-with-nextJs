'use client'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import Banner4 from './Banner4';
import Banner5 from './Banner5';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <Banner2 />
            </div>
            <div>
             <Banner3 />
            </div>
            <div>
             <Banner4 />
            </div>
            <div>
             <Banner5 />
            </div>
          
           
        </Carousel>
    );
};

export default Banner;