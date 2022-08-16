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
      <div className="portfolio_list">
        <Swiper
          {...projectSliderProps}
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
export default Projects;
