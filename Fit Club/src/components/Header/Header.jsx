import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [opened, setOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {opened === false && mobile === true ? (
        <div
          style={{
            background: "var(--appColor)",
            padding: ".5rem",
            borderRadius: "5px"
          }}
          onClick={() => setOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />{" "}
        </div>
      ) : (
        <ul>
          <li>
            <Link
              onClick={() => setOpened(false)}
              to="home"
              smooth={true}
              spy={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpened(false)}
              to="programs"
              smooth={true}
              spy={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpened(false)}
              to="reasons"
              smooth={true}
              spy={true}
            >
              Why
            </Link>
            us
          </li>
          <li>
            <Link
              onClick={() => setOpened(false)}
              to="plans"
              smooth={true}
              spy={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setOpened(false)}
              to="testimonials"
              smooth={true}
              spy={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Header;
