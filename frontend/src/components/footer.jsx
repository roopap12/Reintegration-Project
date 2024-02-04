import React from "react";
import "../App.css";

export const Footer = (props) => {
  return (
    <footer>
      <div className="footer-space mb-8"></div>
      <div className="footer-line-container">
        <div className="container">
          <div className="footer-line"></div>
        </div>
      </div>
      <div className="extra-space" style={{ height: "20px" }}></div>
      <div className="footer-below">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mt-4">
              <h4>About Us</h4>
              <ul>
                <li>Our Team</li>
                <li>Our Purpose</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Disclaimer</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="col-lg-4 mt-4">
              <h4>Resources</h4>
              <ul>
                <li>Legal Aid</li>
                <li>Accommodation</li>
                <li>Education</li>
                <li>Employment</li>
                <li>Mental Health</li>
                <li>Rehabilitation</li>
              </ul>
            </div>
            <div className="col-lg-4 mt-4">
              <h4 className="mb-4 text-lg font-bold">Follow Us</h4>
              <div className="d-flex">
                <a
                  style={{ marginRight: "40px" }}
                  href={props.data ? props.data.facebook : "/"}
                >
                  <i
                    className="fa fa-facebook"
                    style={{ fontSize: "3rem" }}
                  ></i>
                </a>
                <a
                  style={{ marginRight: "40px" }}
                  href={props.data ? props.data.twitter : "/"}
                >
                  <i className="fa fa-twitter" style={{ fontSize: "3rem" }}></i>
                </a>
                <a
                  style={{ marginRight: "40px" }}
                  href={props.data ? props.data.youtube : "/"}
                >
                  <i className="fa fa-youtube" style={{ fontSize: "3rem" }}></i>
                </a>
                <a
                  href={props.data ? props.data.linkedin : "/"}
                >
                  <i
                    className="fa fa-linkedin"
                    style={{ fontSize: "3rem" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="extra-space" style={{ height: "60px" }}></div>
              <div className="text-center font-bold">
                Copyright &copy; Reintegration Hub 2024
              </div>
              <div className="extra-space" style={{ height: "40px" }}></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


