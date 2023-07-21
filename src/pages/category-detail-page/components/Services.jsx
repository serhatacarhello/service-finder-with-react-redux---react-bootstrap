import React from "react";
import { Col, Row } from "react-bootstrap";

const Services = ({ categoryDetail }) => {
  const services = categoryDetail?.services;
  console.log("🚀 ~ file: Services.jsx:5 ~ Services ~ serviceData:", services);
  return (
    <>
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-bolder">Services</h1>
      </div>
      {services?.map((service, index) => (
        <Col
          key={index}
          sm="12"
          md="6"
          lg={4}
          style={{ order: index }}
          className="mb-2 text-center"
        >
          <div className="bg-primary w-100 h-100 d-flex align-items-center justify-content-center shadow ">
            <h4 className="w-100  d-inline-block">{service.name}</h4>
          </div>
        </Col>
      ))}
    </>
  );
};

export default Services;
