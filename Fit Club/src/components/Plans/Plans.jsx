import React from "react";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import "./Plans.css";
const Plans = () => {
  return (
    <div className="PlansContainer" id="plans">
      <div className="blur blur-p-1"></div>
      <div className="blur blur-p-2"></div>
      <div className="Pheader" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      <div className="plans">
        {plansData.map((paln, i) => {
          return (
            <div className="plan" key={i}>
              {paln.icon}
              <span>{paln.name}</span>
              <span>{paln.price}</span>
              <div className="features">
                {paln.features.map((feature, i) => {
                  return (
                    <div className="feature" key={i}>
                      <img src={whiteTick} alt="" />
                      <span key={i}>{feature}</span>
                    </div>
                  );
                })}
              </div>
              <div>
                <span> See More Benefits -> </span>
              </div>
              <button className="btn">Join Now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Plans;
