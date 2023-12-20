import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="top-bar">
          <h1 className="text-center mt-5 mb-5">Contact Us</h1>

          <div className="row text-center">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <i class="fa fa-phone mb-3"></i>
              <h4>Phone</h4>
              <p>+19628786</p>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <i class="fa fa-envelope mb-3"></i>
              <h4>Email</h4>
              <p>email@gmail.com</p>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <i class="fa fa-map-marker mb-3"></i>
              <h4>Location</h4>
              <p>Pakistan</p>
            </div>
          </div>
        </div>

        <div className="bottom-bar mt-5 text-center">
          <form>
            <div className="row form-row">
              <div className="form-group col-md-6">
                <label htmlFor="fullName"></label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Full Name"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="subject"></label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNo"></label>
              <input
                type="text"
                className="form-control"
                id="phoneNo"
                placeholder="Phone No"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message"></label>
              <textarea
                className="form-control msg"
                id="message"
                placeholder="Message"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-navbar mt-4 mb-5">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
