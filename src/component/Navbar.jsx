import React, { useState } from "react";
import "../css/navbar.scss";
import search from "../assets/image/search.svg";
import setting from "../assets/image/setting.svg";
import sound from "../assets/image/sound.svg";
import notification from "../assets/image/notification.svg";
import profile from "../assets/image/profile.svg";

const Navbar = () => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">TECHYON</span>
      </div>

      <div className="navbar-right">
        <div className="search-container">
          <button className="search-icon">
            <img src={search} alt="search" />
          </button>
        </div>

        <button className="notifications">
          <img src={setting} alt="setting" />
        </button>

        <button className="notifications">
          <img src={sound} alt="sound" />
        </button>

        <button
          className="notifications"
          onClick={() => setNotificationsOpen(!isNotificationsOpen)}
        >
          <img src={notification} alt="notification" />
          <span className="notification-badge">99+</span>
        </button>
        {isNotificationsOpen && (
          <div className="dropdown notifications-dropdown">
            <p>No new notifications</p>
          </div>
        )}

        <button
          className="user-avatar"
          onClick={() => setUserDropdownOpen(!isUserDropdownOpen)}
        >
          <img src={profile} alt="User Avatar" className="avatar" />
        </button>
        {isUserDropdownOpen && (
          <div className="dropdown user-dropdown">
            <p>Profile</p>
            <p>Logout</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
