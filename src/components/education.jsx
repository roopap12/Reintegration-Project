import React from "react";
import './services.css'

export const Education = (props) => {
  return (
    <div id="education" className="screen">
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body text-center">
                  <h2 className="card-title">Education</h2>
                  <div className="row">
                    {props.data
                      ? props.data.map((d, i) => (
                          <div key={`${d.title}-${i}`}>
                            {" "}
                            <p className="paragraph4">{d.paragraph4}</p>
                            <div>
                              <p></p>
                            </div>
                            <p className="paragraph5">{d.paragraph5}</p>
                          </div>
                        ))
                      : "Loading..."}
                  </div>
                  <div className="text-center">
                    {/* Move this button inside the card */}
                    <a href="#features" className="btn btn-custom btn-lg page-scroll">
                      Resources
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
