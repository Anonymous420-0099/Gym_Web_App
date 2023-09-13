import React from "react";
import "./Join.css";
const Join = () => {
  return (
    <div className="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">REady To</span>
          <span> Level UP</span>
        </div>
        <div>
          <span>Your Body</span>
          <span className="stroke-text"> With US?</span>
        </div>
      </div>
      <div className="right-j">
        <form action="" className="email-C">
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Address"
          />
          <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};
export default Join;
