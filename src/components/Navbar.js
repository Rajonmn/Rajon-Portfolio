import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaDiscord,
} from "react-icons/fa";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleCLick = () => setClick(!click);

  return (
    <nav className="header">
      <div className="logo">
        <Link 
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={30}
        >
          <div className="logo-img">
            <span className="blink">&#123;</span>
            <span>.</span>WC<span className="blink">&#125;</span>
          </div>
        </Link>
      </div>
      <ul
        className={click ? "nav-menu active" : "nav-menu"}
        onClick={handleCLick}
      >
        <li>
        <Link
          className="navLink"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={30}
          >About</Link>
        </li>
        <li>
        <Link
          className="navLink"
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            duration={30}
          >Projects</Link>
        </li>
        <li>
          <Link
          className="navLink" 
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            duration={30}>Skills</Link>
        </li>
        <li>
          <Link
          className="navLink"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={30}
          >Contact</Link>
        </li>
      </ul>
      <div className={click ? "social-links active" : "social-links"}>
      <a
          href="https://wa.me/8801991030303"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp
            className="social"
            size={25}
            style={{ marginRight: "2rem" }}
          />
        </a>
        <a
          href="https://github.com/Rajonmn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className="social"
            size={25}
            style={{ marginRight: "2rem" }}
          />
        </a>
        <a
          href="https://discord.com/channels/1212757290973929523/1277381875286937740"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord
            className="social"
            size={25}
            style={{ marginRight: "2rem" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rajonmn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className="social"
            size={25}
            style={{ marginRight: "2rem" }}
          />
        </a>
      </div>
      <div className="hamburger" onClick={handleCLick}>
        {click ? (
          <FaTimes className="bars" size={25} />
        ) : (
          <FaBars className="bars" size={25} style={{ color: "#fff" }} />
        )}
      </div>
    </nav>
  );
}
