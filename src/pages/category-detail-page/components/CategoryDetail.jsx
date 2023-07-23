import React from "react";
import { Col } from "react-bootstrap";

const CategoryDetail = ({ categoryDetail }) => {
  const category = categoryDetail?.category;
  //   console.log(
  //     "🚀 ~ file: CategoryDetail.jsx:5 ~ CategoryDetail ~ data:",
  //     category
  //   );
  return (
    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 className="display-5 fw-bolder">{category?.name}</h1>
      <p className="fs-5 text-muted">{category?.description}</p>
    </div>
  );
};

export default CategoryDetail;
