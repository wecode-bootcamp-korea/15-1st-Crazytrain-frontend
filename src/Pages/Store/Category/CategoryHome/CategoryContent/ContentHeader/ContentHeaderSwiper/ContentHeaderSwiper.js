import React, { Component } from "react";
// import Swiper core and required components
import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./swiper.scss";
import "./navigation.scss";
import "./pagination.scss";
import "./ContentHeaderSwiper.scss";

// install Swiper components
SwiperCore.use([Autoplay, Navigation, Pagination, A11y]);

class ContentHeaderSwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideImageUrls: [],
    };
  }

  componentDidMount() {
    fetch("/data/store/slideImageUrls.json")
      .then(response => response.json())
      .then(result => {
        this.setState({
          slideImageUrls: result.slideImageUrls,
        });
      });
  }
  render() {
    const { slideImageUrls } = this.state;

    return (
      <Swiper
        className="ContentHeaderSwiper"
        spaceBetween={50}
        slidesPerView={1}
        style={{ height: "290px", width: "100%" }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={true}
      >
        {slideImageUrls.length > 0 &&
          slideImageUrls.map((backgroundUrl, index) => (
            <SwiperSlide key={index} className="ContentHeaderSwiperSlide">
              <div
                className="slideImage"
                style={{ backgroundImage: "url(" + backgroundUrl + ")" }}
              />
            </SwiperSlide>
          ))}
        ...
      </Swiper>
    );
  }
}

export default ContentHeaderSwiper;
