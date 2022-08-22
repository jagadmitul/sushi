import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { headerSliderProps } from "../sliderProps";

const HeaderCarousel = () => {
    return (
        <Fragment>
            <div id="home">
                <Swiper
                    {...headerSliderProps}
                    className="owl-carousel gallery_zoom"
                >
                    <SwiperSlide>
                        <div className="list_inner">
                            <div className="image">
                                <img src="img/sushi_wadasi/1.jpg" alt="" />
                                <div
                                    className="main"
                                    data-img-url="img/sushi_wadasi/1.jpg"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="list_inner">
                            <div className="image">
                                <img src="img/sushi_wadasi/2.jpg" alt="" />
                                <div
                                    className="main"
                                    data-img-url="img/sushi_wadasi/2.jpg"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="list_inner">
                            <div className="image">
                                <img src="img/sushi_wadasi/3.jpg" alt="" />
                                <div
                                    className="main"
                                    data-img-url="img/sushi_wadasi/3.jpg"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Fragment>
    );
};

export default HeaderCarousel;
