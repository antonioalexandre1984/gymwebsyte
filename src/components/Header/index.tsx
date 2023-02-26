import './Header.css';
import logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { useState } from 'react';
import { Link } from 'react-scroll'

export function Header() {
  const mobile = window.innerWidth < 768 ? true : false;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      {mobile && (
        <div
          className="menu-toggle"
          style={{
            backgroundColor: "var(--appColor)",
            color: "var(--orange)",
            display: showMenu ? "none" : "block",
          }}
          onClick={() => setShowMenu(true)}
        >
          <img
            src={Bars}
            alt=""
            className="logo-mobile"
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
          />
        </div>
      )}
      {mobile && showMenu && (
        <div className="menu-overlay" onClick={() => setShowMenu(false)}>
          <ul className="menu-mobile">
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                onClick={() => setShowMenu(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="programs"
                spy={true}
                smooth={true}
                onClick={() => setShowMenu(false)}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                to="whyus"
                spy={true}
                smooth={true}
                onClick={() => setShowMenu(false)}
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                to="plans"
                spy={true}
                smooth={true}
                onClick={() => setShowMenu(false)}
              >
                Plans
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                onClick={() => setShowMenu(false)}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
