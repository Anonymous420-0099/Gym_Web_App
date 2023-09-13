import React from "react";
import Header from "../Header/Header";
import HeroImg from "../../assets/hero_image.png";
import Heart from "../../assets/heart.png";
import HeroImgBack from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import "./Hero.css";
const Hero = () => {
  const wid = window.innerWidth <= 768 ? true : false;
  const hy = { type: "spring", duration: 3 };
  return (
    <div className="hero" id="home">
      <div className="blur blur-h"></div>
      <div className="left">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: wid ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...hy, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        <div className="hhero">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape your ideal body and live up your
              life to fullset.
            </span>
          </div>
          <div className="figures">
            <div>
              <span>
                <NumberCounter start={100} end={140} delay="4" preFix="+" />
              </span>
              <span>expert coachs</span>
            </div>
            <div>
              <span>
                <NumberCounter start={800} end={978} delay={"4"} preFix={"+"} />
              </span>
              <span>members joined</span>
            </div>
            <div>
              <span>
                <NumberCounter start={10} end={50} delay={"4"} preFix={"+"} />
              </span>
              <span>fitness program</span>
            </div>
          </div>
          <div className="hbtn">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
      <div className="right">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: wid ? "95%" : "4rem" }}
          transition={hy}
          className="heartRate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpms</span>
        </motion.div>
        <img src={HeroImg} alt="" className="Himg" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={hy}
          src={HeroImgBack}
          alt=""
          className="HimgB"
        />
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={hy}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
