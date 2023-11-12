import React from "react";
import img1 from "../assets/testmonial-1.svg";
import img2 from "../assets/testmonial-2.svg";
import img3 from "../assets/testmonial-3.svg";

const Testimonials = () => {
  return (
    <>
      <div className="testmonials">
        <div>
          <h1>Testimonials</h1>
        </div>
        <div className="tests">
          <div className="test">
            <img src={img1} alt="" />
            <h3>Corey Korsgaard</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="test">
            <img src={img2} alt="" />
            <h3>Jakob Aminoff</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="test">
            <img src={img3} alt="" />
            <h3>Carla Press</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
