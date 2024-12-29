import React from "react";
import menu from "../assets/image/menu.svg";
import addition from "../assets/image/addition.svg";
import home from "../assets/image/home.svg";
import cloud from "../assets/image/cloud.svg";
import grider from "../assets/image/grider.svg";
import img1 from "../assets/image/img1.svg";
import img2 from "../assets/image/img2.svg";
import img3 from "../assets/image/img3.svg";
import img4 from "../assets/image/img4.svg";
import img5 from "../assets/image/img5.svg";
import img6 from "../assets/image/img6.svg";
import img7 from "../assets/image/img7.svg";
import img8 from "../assets/image/img8.svg";


const Sidebar = () => {
  return (
    <div className="sidebar">
        <button className="toggle-button">
            <img src={menu} alt="menu"  />
        </button>

      <ul className="menu">
        <li className="menu-item">
          <img src={addition} alt="addition" />
        </li>
        <li className="menu-item">
        <img src={home} alt="home" />
         
        </li>
        <li className="menu-item">
        <img src={cloud} alt="cloud" />
       
        </li>
        <li className="menu-item">
        <img src={grider} alt="grider" />
       
        </li>
        <li className="menu-item">
        <img src={img1} alt="img1" />
         
        </li>
        <li className="menu-item">
        <img src={img2} alt="img2" />
        
        </li>


        <li className="menu-item">
        <img src={img3} alt="img3" />
          
        </li> <li className="menu-item">
        <img src={img4} alt="img4" />
         
        </li> <li className="menu-item">
        <img src={img5} alt="img5" />
        
        </li>
        <li className="menu-item">
        <img src={img6} alt="img6" />
       
        </li> <li className="menu-item">
        <img src={img7} alt="img7" />
         
        </li> <li className="menu-item">
        <img src={img8} alt="img8" />
        
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
