import React from "react";
import { Link } from "react-router-dom";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            Information on practical resources to support your re-integration
            journey.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <Link key={`${d.name}-${i}`} to={d.link} className="col-md-4">
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </Link>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
