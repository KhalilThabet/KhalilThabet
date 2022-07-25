import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import ScrollDown  from "../scroll-down/ScrollDown";


import "./carousal.css";

import  Slide1  from "../../assets/img/carousal/slide1.jpg";
import  Slide2  from "../../assets/img/carousal/slide2.jpg";
import  Slide3  from "../../assets/img/carousal/slide3.jpg";
import  Slide4 from "../../assets/img/carousal/Slide4.png";
import  Slide5 from "../../assets/img/carousal/Slide5.png";
import  Slide6  from "../../assets/img/carousal/Slide6.jpg";
import  Slide7  from "../../assets/img/carousal/Slide7.jpg";
import  Slide8  from "../../assets/img/carousal/Slide8.JPG";
import  Slide9 from "../../assets/img/carousal/Slide9.jpg";
import  Slide10 from "../../assets/img/carousal/Slide10.jpg";
import  Slide11 from "../../assets/img/carousal/Slide11.jpg";


const CustomCarousel = () => {
    return (
        <div id="home">
            <Carousel controls={false} indicators interval={5000} pause={false}>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img " src={Slide1} alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img "
                        src={Slide2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img "
                        src={Slide3}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img "
                        src={Slide4}
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img "
                        src={Slide5}
                        alt="Fifth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img "
                        src={Slide6}
                        alt="Sixth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img "
                        src={Slide7}
                        alt="Seventh slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img "
                        src={Slide8}
                        alt="Eighth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img "
                        src={Slide10}
                        alt="Tenth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img "
                        src={Slide11}
                        alt="Last slide"
                    />
                </Carousel.Item>
            </Carousel>
            <ScrollDown/>
        </div>
    )
}

export default CustomCarousel