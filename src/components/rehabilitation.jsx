import React from "react";

export const Rehabilitation = (props) => {
  return (
    <div id="rehabilitation">
    <div style={{ padding: "60px", height: "100vh" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card" style={{ backgroundColor: "white", marginRight: "20px", height: "80vh" }}>
              <div className="card-body text-center" style={{ padding: "100px 0" }}>
                <h2 className="card-title">
                  Rehabilitation
                </h2>
                <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} >
                  {" "}
                <p style={{ margin: "0 150px", marginBottom: "40px" }}>{d.paragraph10}</p>
                <div>
                <p></p>
                </div>
                <p style={{ margin: "0 150px" }}>{d.paragraph11}</p>
                </div>
              ))
            : "Loading..."}
        </div>
                <div className="text-center">
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                    style={{ marginTop: "20px" }}
                  >
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