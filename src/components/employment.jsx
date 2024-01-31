import React from "react";
import './services.css'

export const Employment = (props) => {
  return (
    <div id="employment" className="screen">
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body text-center">
                  <h2 className="card-title">Employment</h2>
                  <div className="row">
                    {props.data
                      ? props.data.map((d, i) => (
                          <div key={`${d.title}-${i}`}>
                            {" "}
                            <p className="paragraph6">{d.paragraph6}</p>
                            <div>
                              <p></p>
                            </div>
                            <p className="paragraph7">{d.paragraph7}</p>
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
