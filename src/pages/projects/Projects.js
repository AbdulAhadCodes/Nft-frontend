import React from "react";
import "./Projects.css";
import { projects, topDevelopers } from "../../data";

const Projects = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="project-top-div mb-4"></div>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 mb-3 text-center location white-color">
            <img
              src="/images/location.jpg"
              className="mt-4"
              alt=""
              style={{ width: "150px", height: "180px" }}
            />
            <h3 className="white-color mt-3">Qlab</h3>
            <p className="white-color">@qlab</p>
            <p className="white-color">Followers 1M+</p>

            <div className="projects-btns d-flex flex-column">
              <button className="btn-navbar btn mt-4 mt-4">
                Ongoing Activities
              </button>
              <button className="btn-navbar btn mt-4 mt-2">Testimonials</button>
              <button className="btn-navbar btn mt-4 mt-4">
                Our Previous Projects
              </button>
              <button className="btn-navbar btn mt-4 mt-4">Case Studies</button>
            </div>
          </div>

          <div className="col-lg-9 col-md-9 col-sm-12 white-color">
            <h2 className="white-color text-center location">Projects</h2>
            <div className="row">
              {projects.map((pro) => (
                <div className="text-center col-lg-3 col-md-3 col-sm-6 col-6 mt-4">
                  <img src={pro.img} className="projectimg mt-4" alt="" />
                  <p className="fw-bold mt-2">{pro.name}</p>
                  <a
                    className="btn-navbar btn mb-4"
                    href={pro.link}
                    target="_blank"
                  >
                    Visit
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="project-top-div mt-4 mb-4"></div>

        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 mb-3  text-center location white-color">
            <img
              src="/images/location.jpg"
              className="loc-img mt-5"
              alt=""
              style={{ width: "150px", height: "180px" }}
            />
            <h3 className="white-color mt-3">Qlab</h3>
            <p className="white-color">@qlab</p>
            <p className="white-color mb-5">Followers 1M+</p>

            <div className="projects-btns d-flex flex-column">
              <button className="btn-navbar btn mt-5 mb-4">
                Ongoing Activities
              </button>
              <button className="btn-navbar btn mt-4 mb-4">Testimonials</button>
              <button className="btn-navbar btn mt-4 mb-4">
                Our Previous Projects
              </button>
              <button className="btn-navbar btn mt-4 mb-4">Case Studies</button>
            </div>
          </div>

          <div className="col-lg-9 col-md-9 col-sm-12 white-color">
            <h2 className="white-color text-center location">Team</h2>
            <div className="row">
              {topDevelopers.map((dev) => (
                <div className="text-center col-lg-3 col-md-3 col-sm-6 col-6">
                  <img src={dev.img} className="projectimg mt-4" alt="" />
                  <p className="fw-bold mt-2">{dev.name}</p>
                  <a
                    className="btn-navbar btn mb-4"
                    href={dev.linkedin}
                    target="_blank"
                  >
                    Visit
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="project-top-div mt-4 mb-4"></div>
      </div>
    </>
  );
};

export default Projects;
