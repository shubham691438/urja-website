import React from "react";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <img
            src={logo}
            alt=""
            srcset=""
            style={{ height: "50px", width: "50px" }}
          />
        </a>
        <a class="navbar-brand" href="#">
          <div
            style={{
              fontSize: "2em",
              fontFamily: "Black Ops One",
              color: "transparent",
              backgroundImage: "linear-gradient(orange,yellow)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              backgroundPosition: "right bottom",
              WebkitTextStroke: "1.2px black",
            }}
          >
            URJA
          </div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse"
          id="navbarNav"
          style={{ left: "auto", right: "0" }}
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#"   >
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Matches <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Player <span class="sr-only"></span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Contact <span class="sr-only"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
