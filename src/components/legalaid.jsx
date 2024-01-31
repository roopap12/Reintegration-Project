import React from "react";
import './services.css'
export const Legalaid = (props) => {
  return (
    <div id="legalaid" className="screen">
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body text-center">
                  <h2 className="card-title">Legal Aid</h2>
                  <div className="row">
                    {props.data
                      ? props.data.map((d, i) => (
                          <div key={`${d.title}-${i}`}>
                            {" "}
                            <p className="paragraph">{d.paragraph}</p>
                            <div>
                              <p></p>
                            </div>
                            <p className="paragraph1">{d.paragraph1}</p>
                          </div>
                        ))
                      : "Loading..."}
                  </div>
                  <div className="text-center">
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












