import React from "react";
import RightArrow from "../../assets/rightArrow.png";
import "./programs.css";
import { programsData } from "../../data/programsData";
const Programs = () => {
  function imgget(index) {
    const Image = programsData[index].image;
    return Image;
  }
  return (
    <div className="programs" id="programs">
      <div className="Pheader">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">To Shape You</span>
      </div>
      <div className="programs2">
        {programsData.map((program, i) => {
          return (
            <div className="program">
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className="JNow">
                <span>Join Now</span>
                <img src={RightArrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Programs;
