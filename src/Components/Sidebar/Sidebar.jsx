import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar_nav">
        <ul>
          <li>
            < Link to = "/News"> News </Link>
          </li>
          <li>
            <Link to="/Todo"> Todo</Link>
          </li>

          <li>
            <Link to = "/Crypto"> Crypto</Link>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Sidebar;
