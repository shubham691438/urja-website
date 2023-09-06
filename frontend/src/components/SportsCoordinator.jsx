import React from "react";
import coordinator1 from "../assets/images/team-1.jpg";
// import coordinator2 from "../assets/images/team-2.jpg";
function sportsCoordinator() {
  return (
    <div
      className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      <div className=" icon-box2 team-member w-100 ">
        <div className="member-img">
          <img
            src={coordinator1}
            style={{
              width: "100%",
              height: "auto",
            }}
            alt="Cricket"
          ></img>
        </div>
        <div className="member-info">
          <h4 style={{ color: "white" }}>Shubham Tiwari</h4>
          <span style={{ color: "white" }}>Web Head</span>
        </div>
      </div>
    </div>
  );
}

export default sportsCoordinator;
