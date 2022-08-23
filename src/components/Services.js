import { Fragment, useEffect, useState } from "react";
import { Servicehashtag } from "../utilits";
import ServicePopup from "./popup/ServicePopup";

const serviceData = [
  {
    name: "Sunday",
    img: "img/service/1.jpg",
    description: [
      "12:00 PM - 07:00 PM",
    ],
  },
  {
    name: "Monday",
    img: "img/service/2.jpg",
    description: [
      "Closed",
    ],
  },
  {
    name: "Tuesday",
    img: "img/service/3.jpg",
    description: [
      "11:30 AM - 07:00 PM",
    ],
  },
  {
    name: "Wednesday",
    img: "img/service/4.jpg",
    description: [
      "11:30 AM - 07:00 PM",
    ],
  },
  {
    name: "Thursday",
    img: "img/service/4.jpg",
    description: [
      "11:30 AM - 07:00 PM",
    ],
  },
  {
    name: "Friday",
    img: "img/service/4.jpg",
    description: [
      "11:30 AM - 07:00 PM",
    ],
  },
  {
    name: "Saturday",
    img: "img/service/4.jpg",
    description: [
      "11:30 AM - 07:00 PM",
    ],
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  useEffect(() => {
    Servicehashtag();
  }, [current]);

  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="orido_tm_section" id="business">
        <div className="orido_tm_service">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Business Hours
                </span>
              </h3>
            </div>
            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li className={current == i ? "current" : ""} key={i}>
                    <div className="list_inner">
                      <div className="left">
                        <span className="number">{`0${i + 1}`}</span>
                        <h3 className="title">{service.name}</h3>
                      </div>
                      <div className="right">
                        <div className="text">
                          <p>{service.description[0].substring(0, 105)}</p>
                        </div>
                        <div className="arrow">
                          <img
                            className="svg"
                            src="img/svg/time.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <a
                        className="orido_tm_full_link c-pointer"
                      // onClick={() => {
                      //   setActiveData(service);
                      //   setOpen(true);
                      //   setCurrent(i);
                      // }}
                      />
                      {/* Modalbox Info Start */}
                      {/* <img
                        className="popup_service_image"
                        src="img/service/1.jpg"
                        alt=""
                      /> */}
                    </div>
                  </li>
                ))}
              </ul>
              <span className="ccc" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Services;
