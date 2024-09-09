import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/rajon.jpg";

export default function AboutMe({ id }) {
  return (
      <div className="about-container" id={id}>
        <div className="aboutMe-text">
          <h3>about me</h3>
          I’m <span>Abdullah Al Mamun(Rajon)</span>, distinguished by the esteemed, <span>Top-Rated</span> WordPress developer with more than 7 years of comprehensive experience in WordPress design and development, Site Migrations, Speed Optimization, Site Security, Plugin & Theme Customization and eCommerce solutions.<br/> <br/>
                    I am committed to delivering exceptional WordPress development services, with a focus on cultivating strong client relationships that foster satisfaction and trust. Contact me today to discover how I can effectively and efficiently address your WordPress development needs.<br/> <br/>
                    In my free time, I love to travel and discover new places, catch up with friends, read books, stay active through exercise, recharge my <span>batteries</span>, and explore new possibilities!
                    <br/> <br/>
          Want to know more about me? Feel free to <a className='resume' href="https://drive.google.com/file/d/16-cBxh_yFopMHZPzDcN0f_t5mSGpEfTA/view" target="_blank" rel="noopener noreferrer">explore my resume.</a>
        </div>
        <div className="profile-photo">
          <div className="heading"> About Me</div>
          <img className="img" src={myProfile} alt="Profile"></img>
        </div>
        <div className="name">Rajon</div>
      </div>
  );
}
