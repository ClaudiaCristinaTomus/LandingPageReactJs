import React from "react";
import Slider from "react-slick";
import "./Carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../assets/1.jpg"
import slide2 from "../../assets/2.jpg"
import slide3 from "../../assets/3.jpg"
import slide4 from "../../assets/9.jpg"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "grey" }}
            onClick={onClick}
        />
    );
}
const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    };

    return (
        <div className="container">
            <h3 className="titleCarousel">The Most Favorite Drinks</h3>
            <Slider {...settings}>
                <div className="card">
                
                    <div className="card-body">
                    <img src={slide1} alt="" />
                        <h3>Slick</h3>
                        <p>We use react slick</p>
                    </div>
                </div>
                <div className="card">
                   
                    <div className="card-body">
                    <img src={slide2} alt="" />
                        <h3>Slick</h3>
                        <p>We use react slick</p>
                    </div>
                </div>
                <div className="card">
                  
                    <div className="card-body">
                    <img src={slide3} alt="" />
                        <h3>Slick</h3>
                        <p>We use react slick</p>
                    </div>
                </div>
                <div className="card">
                  
                    <div className="card-body">
                    <img src={slide4} alt="" />
                        <h3>Slick</h3>
                        <p>We use react slick</p>
                    </div>
                </div>
                <div className="card">
                    
                    <div className="card-body">
                    <img src={slide1} alt="" />
                        <h3>Slick</h3>
                        <p>We use react slick</p>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default Carousel