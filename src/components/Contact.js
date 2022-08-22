import Link from "next/link";

const Contact = () => {
  return (
    <div className="orido_tm_section" id="contact">
      <div className="orido_tm_contact">
        <div className="container">
          <div className="infobox">
            <div className="video_button">
              <Link href='/'>
              <a className="popup-youtube">
                <img
                  className="anim_circle"
                  src="img/logo/sushi_logo.png"
                  alt=""
                />
                {/* <img className="svg" src="img/svg/play.svg" alt="" /> */}
              </a>
              </Link>
            </div>
            <div className="text">
              <h3>{`Let's`} work together</h3>
              <p>
                You can express yourself however you want and whenever you want,
                for free. You can customize a template or make your own.
              </p>
            </div>
            <div className="orido_tm_boxed_button">
              <Link href='https://www.google.com/maps/dir//Sushi+Wadasi,+66+Mississaga+St+E,+Orillia,+ON+L3V+1V5,+Canada/@44.6090631,-79.4181085,15z/data=!3m1!5s0x4d2aa93b77ad5cfb:0x288d555d4cfd2894!4m8!4m7!1m0!1m5!1m1!1s0x4d2aa93b765f4181:0x9a3511e865e0bf15!2m2!1d-79.4181085!2d44.6090631'>
                <a target='_blank'>
                  Get Directions <img className="svg" src="img/svg/send.svg" alt="" />
                </a>
              </Link>
            </div>
          </div>
          <div className="connect">
            <div className="left">
              <ul>
                <li>
                  <span className="name">Call:</span>
                  <p>
                    <Link href='tel:+17052596800'>
                      <a className="line_effect">
                        +1 705-259-6800
                      </a>
                    </Link>
                  </p>
                </li>
                <li>
                  <span className="name">Email:</span>
                  <p>
                    <a className="line_effect" href="#">
                      support@smith.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="orido_tm_follow">
                <span>© 2022. All Rights Reserved</span>
              </div>
            </div>
          </div>
        </div>
        <span className="element">
          <img className="svg" src="img/svg/elements.svg" alt="" />
        </span>
        <span className="element2">
          <img className="svg" src="img/svg/element-2.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default Contact;
