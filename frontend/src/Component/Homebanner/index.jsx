import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Homebanner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
      };
return(
    <div className="homeBannerSection">
    <Slider {...settings}>
        <div className="item">
            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-image-3.jpg" alt="" className="w-full"/>
        </div>
        <div className="item">
            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-2.jpg" alt="" className="w-full"/>
        </div>
        <div className="item">
            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/slider-image-1.jpg" alt="" className="w-full"/>
        </div>
    </Slider>
</div>
)
}
export default Homebanner