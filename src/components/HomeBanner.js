import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon.png";
import {FaArrowRight} from "react-icons/fa";

export default function HomeBanner({id}) {
  return (
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">Abdullah Al Mamun</div>
              <div className="staticTitle">
                Web Designer
                <div className='hrLine'></div>
              </div>
              <ul className="dynamicTitle">
                <li>+<span>front-end Developer</span></li>
              </ul>
              <a className='btn' href="https://wa.me/8801991030303" target="_blank" rel="noopener noreferrer">Contact Me<FaArrowRight className='btn-arrow' size={22} style={{marginLeft: "1rem"}}/></a>
            </div>
        </div>
        <div className="mask">
           <img className='bg' src={cartoon} alt="boy-with-laptop" />
        </div>
    </div>
  )
}
