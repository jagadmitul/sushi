import { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="orido_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="img/logo/outlet_logo.png" alt="" />
              </a>
            </Link>
          </div>
          <div className="trigger" onClick={() => setToggle(!toggle)}>
            <div
              className={`hamburger hamburger--slider ${toggle ? "is-active" : ""
                }`}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown" style={{ display: toggle ? "block" : "none" }}>
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            <li className="current">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Get Directions</a>
              </Link>
            </li>
            <li>
              <Link href="tel:+17052596800">
                <a>Call Now</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
