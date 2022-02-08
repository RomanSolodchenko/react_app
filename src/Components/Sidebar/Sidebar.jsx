import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="Sidebar_nav">
        <ul>
          <li>
            <a href="/News"> News</a>
          </li>
          <li>
            <a href="/Todo"> Todo</a>
          </li>

          <li>
            <a href="/Crypto"> Crypto</a>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Sidebar;
