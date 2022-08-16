import Link from 'next/link'

const Header = ({ dark }) => {
  return (
    <div className="orido_tm_header">
      <div className="header_in">
        <div className="logo">
          <Link href="/">
            <a>
              <img src={`img/logo/outlet_logo.png`} alt="" />
            </a>
          </Link>
        </div>
        <div className="menu">
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
