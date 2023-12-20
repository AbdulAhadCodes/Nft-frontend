import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <h1 className="white-color text-center mt-5 mb-5">About Us</h1>
      <div className="about-card">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <h2 className="white-color">
              On a mission to environmental sustainability with NFT's
            </h2>
            <p className="white-color">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              vel ea beatae neque reiciendis sint Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Explicabo minima repellendus
              sapiente aliquid cum itaque.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <img className="about-img1" src="/images/metaverse.gif" alt="" />
          </div>
        </div>
      </div>

      <h1 className="text-center white-color mt-5 mb-5">
        NFT Gen Marketplace with everything for everyone
      </h1>
      <div className="text-center">
        <video
          className="background-video"
          type="video/mp4"
          autoPlay
          muted
          loop
        >
          <source src="/images/about.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="about-card mb-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <img
              className="about-img1 mt-2 mb-3"
              src="/images/BuySell.svg"
              alt=""
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <h2 className="white-color">
              On a mission to environmental sustainability with NFT's
            </h2>
            <p className="white-color">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              vel ea beatae neque reiciendis sint Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Explicabo minima repellendus
              sapiente aliquid cum itaque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
