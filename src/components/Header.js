import React from "react";
import { MdOutlineNextPlan } from "react-icons/md";

function Header() {
  const style = { marginTop: "3rem", fontSize: "30px", color: "#bcbcbc" };
  return (
    <header>
      <div className="header-div" id="profile_img">
        <div className="profile">
          <img className="header-div" src="./images/profile.jpg" alt="" />
          <h3>Nnaji Raymond</h3>
        </div>
        <MdOutlineNextPlan style={style} />
      </div>
    </header>
  );
}

export default Header;
