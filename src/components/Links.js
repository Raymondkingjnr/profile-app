import React from "react";
import data from "../../src/data";
import { AiFillGithub } from "react-icons/ai";

function Links() {
  console.log(data);
  return (
    <article className="links">
      <div className="btns">
        <button id="twitter">
          <a href="">Twitter links</a>
        </button>
        <button id="btn__zuri">
          <a href="">Zuri Team</a>
        </button>
        <button id="books">
          <a href="">Zuri books</a>
        </button>
        <button id="book__python">
          <a href="">Zuri Pyhton</a>
        </button>
        <button id="pitch">
          <a href="">Background Check For Colors</a>
        </button>
        <button id="book__design">
          <a href="">Design Books</a>
        </button>
      </div>

      <div className="logos">
        <AiFillGithub />
      </div>
    </article>
  );
}

export default Links;
