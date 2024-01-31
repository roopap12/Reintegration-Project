import React from "react";
import './services.css'

export const Rehabilitation = (props) => {
  return (
    <div id="rehabilitation" className="screen">
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body text-center">
                  <h2 className="card-title">Rehabilitation</h2>
                  <div className="row">
                    {props.data
                      ? props.data.map((d, i) => (
                          <div key={`${d.title}-${i}`}>
                            {" "}
                            <p className="paragraph10">{d.paragraph10}</p>
                            <div>
                              <p></p>
                            </div>
                            <p className="paragraph11">{d.paragraph11}</p>
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
