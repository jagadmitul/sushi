import Link from "next/link";

const About = () => {
  return (
    <div className="orido_tm_section" id="about">
      <div className="orido_tm_about">
        <div className="about_in">
          <div className="left">
            {/* <div className="box"> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11361.645557045453!2d-79.4181085!3d44.6090631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a3511e865e0bf15!2sSushi%20Wadasi!5e0!3m2!1sen!2sin!4v1661080698376!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            {/* </div> */}
          </div>
          <div className="right">
            <span className="element">
              <img className="svg" src="img/svg/element.svg" alt="" />
            </span>
            <div className="orido_tm_main_title">
              <h3>
                <span>Address</span>
              </h3>
            </div>
            <div className="text">
              <p>
                66 Mississaga St E <br />
                Orillia, ON L3V 1V5 <br />
                Canada.
              </p>
            </div>
            <div className="short">
              <div className="orido_tm_boxed_button">
                <Link href='https://www.google.com/maps/dir//Sushi+Wadasi,+66+Mississaga+St+E,+Orillia,+ON+L3V+1V5,+Canada/@44.6090631,-79.4181085,15z/data=!3m1!5s0x4d2aa93b77ad5cfb:0x288d555d4cfd2894!4m8!4m7!1m0!1m5!1m1!1s0x4d2aa93b765f4181:0x9a3511e865e0bf15!2m2!1d-79.4181085!2d44.6090631'>
                  <a target='_blank'>
                    Get Directions
                    {/* <img className="svg" src="img/svg/paper.svg" alt="" /> */}
                  </a>
                </Link>
              </div>
              {/* <img src="img/signature.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
