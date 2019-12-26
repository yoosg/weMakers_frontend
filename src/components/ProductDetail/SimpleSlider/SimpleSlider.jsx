import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SimpleSlider.module.scss";
class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img src='//mud-kage.kakaocdn.net/dn/ckDhkL/bIcxX9oV15l/QWkx4drfvCO9RGWfKTidXK/img.jpg?convert=resize2&w=640&h=500' />
        </div>
        <div>
          <img src='//mud-kage.kakaocdn.net/dn/ZcZfc/bIcxYc0hqWA/jJELbkOSfkJPulz496hHHK/img.jpg?convert=resize2&w=640&h=500' />
        </div>
        <div>
          <img src='//mud-kage.kakaocdn.net/dn/5dwrv/bIcxYa9dBmI/NHUK9O93jUY5eKKJheuw21/img.jpg?convert=resize2&w=640&h=500' />
        </div>
        <div>
          <img src='//mud-kage.kakaocdn.net/dn/kS97J/bIcxX6Mwnql/kzypHZGbsx357spzZyNYuk/img.jpg?convert=resize2&w=640&h=500' />
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider;
