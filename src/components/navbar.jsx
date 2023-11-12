import React from "react";
import { useState } from "react";
import menu from "../assets/icon-menu.svg";
import menuclose from "../assets/icon-menu-close.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="desk-nav">
        <div className="list1">
        <div>Home</div>
          <div>About</div>
          <div>Schedules</div>
          <div>Membership</div>
          <div>Pricing</div>
        </div>
        <div className="list2">
        <div>Offers</div>
          <div className="courses"><button>Courses</button></div>
        </div>
      </div>
      <div className="emptytag"></div>
      <div className="menu-open" onClick={() => setOpen(!open)}>
        <img src={menu} alt="menu" />
      </div>
      <div className={"mob-nav " + (open ? "flex" : "none")}>
        <div className="menu-close" onClick={() => setOpen(!open)}>
          <img src={menuclose} alt="ham-close" />
        </div>
        <div className="list1">
          <div>Home</div>
          <div>About</div>
          <div>Schedules</div>
          <div>Membership</div>
          <div>Pricing</div>
        </div>
        <div className="list2">
          <div>Offers</div>
          <div className="courses"><button>Courses</button></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
