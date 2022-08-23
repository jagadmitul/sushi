import Link from 'next/link'

const Header = ({ dark }) => {
  return (
    <div className="orido_tm_header">
      <div className="header_in">
        <div className="logo">
          <Link href="/">
            <a>
              <img src='img/logo/sushi_logo.png' alt="" />
            </a>
          </Link>
        </div>
        <div className="menu">
          <ul className="anchor_nav">
            <li className="current">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#business">Business Hours</a>
            </li>
            <li>
              <a href="#dishes">Dishes</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <span className="ccc" />
        </div>
        <div className="button">
          <Link href="tel:+17052596800">
            <a>
              Call Now
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
