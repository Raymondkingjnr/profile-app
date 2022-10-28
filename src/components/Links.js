import React from "react";
import { AiFillGithub } from "react-icons/ai";

function Links() {
  const gitStyle = { fontSize: "1.5rem" };
  return (
    <article className="links">
      <div className="btns">
        <button id="twitter">
          <a href="https://twitter.com/ArihamSK">Twitter links</a>
        </button>
        <button id="btn__zuri">
          <a href="https://training.zuri.team/">Zuri Team</a>
        </button>
        <button id="books">
          <a href="http://books.zuri.team/">Zuri books</a>
        </button>
        <button id="book__python">
          <a href="https://books.zuri.team/">Zuri Pyhton</a>
        </button>
        <button id="pitch">
          <a href="https://background.zuri.team/">
            Background Check For Colors
          </a>
        </button>
        <button id="book__design">
          <a href="https://books.zuri.team/design-rules">Design Books</a>
        </button>
      </div>

      <div className="logos">
        <button className="logo-btn slack">
          <a href="">
            <img src="./images/download.jpeg" alt="" id="slack" />
          </a>
        </button>
        <button className="logo-btn">
          <a href="https://github.com/Raymondkingjnr">
            <AiFillGithub style={gitStyle} />
          </a>
        </button>
      </div>
    </article>
  );
}

export default Links;
