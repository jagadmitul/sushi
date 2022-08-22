import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSliderProps } from "../sliderProps";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
const Projects = () => {
  useEffect(() => {
    dataImage();
  }, []);
  const [detailsPopup, setDetailsPopup] = useState(false);

  return (
    <Fragment>
      <DetailsPopup close={() => setDetailsPopup(false)} open={detailsPopup} />
      <div className="orido_tm_section" id="dishes">
        <div className="orido_tm_portfolio">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Special Dishes
                </span>
              </h3>
            </div>
            <div className="portfolio_list">
              <Swiper
                {...projectSliderProps}
                className="owl-carousel gallery_zoom"
              >
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/1.jpg"
                      />
                    </div>
                    <a
                      className="orido_tm_full_link popup-youtube"
                      href="img/portfolio/5.jpg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/2.jpg"
                      />
                    </div>
                    <a
                      className="orido_tm_full_link popup-vimeo"
                      href="img/portfolio/5.jpg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/3.jpg"
                      />
                    </div>
                    <a
                      className="orido_tm_full_link soundcloude_link mfp-iframe audio"
                      href="img/portfolio/5.jpg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/4.jpg"
                      />
                    </div>
                    <a
                      className="orido_tm_full_link details_link c-pointer"
                      href="img/portfolio/5.jpg"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/5.jpg"
                      />
                    </div>
                    <a
                      className="orido_tm_full_link zoom"
                      href="img/portfolio/5.jpg"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <a className="prev_button" href="#">
                <img className="svg" src="img/svg/prev.svg" alt="" />
              </a>
              <a className="next_button" href="#">
                <img className="svg" src="img/svg/next.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Projects;
