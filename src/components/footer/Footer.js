import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer white-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-6 mt-5 text-center">
              <h5>Development</h5>
              <p>Mern</p>
              <p>React Js</p>
              <p>Node Js</p>
              <p>Express Js</p>
              <p>Apollo Client</p>
              <p>Mongodb</p>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-6 mt-5 text-center">
              <h5>Design</h5>
              <p>Figma</p>
              <p>Adobe Xd</p>
              <p>Node Js</p>
              <p>Wordpress</p>
              <p>Canva</p>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-6 mt-5 text-center">
              <h5>Stem Wizard Academia</h5>
              <p>Stem Education</p>
              <p>Air Academics</p>
              <p>Stem Wizard</p>
              <p>Online Education</p>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-6 mt-5 text-center">
              <h5>Subscribe to our Newsletter</h5>
              <input
                className="email mt-2 me-1"
                type="email"
                placeholder="Enter your email"
              />
              <button className="btn btn-navbar">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
