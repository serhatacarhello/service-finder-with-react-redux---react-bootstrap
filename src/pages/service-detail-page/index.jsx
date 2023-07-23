import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { Row } from "react-bootstrap";
import formatDate from "../../utils/DateUtils";
import TruncateText from "../../utils/TextUtils";

const ServiceDetailPage = () => {
  const [serviceDetail, setServiceDetail] = useState();
  const params = useParams();
  //   console.log(params);
  const api = useApi();

  useEffect(() => {
    (async () => {
      const response = await api.get(
        `/public/services/getBySlug/${params.slug}`
      );
      console.log(response.data);
      setServiceDetail(response.data.data);
    })();
  }, [params.slug]);

  console.log(serviceDetail);
  if (!serviceDetail) return;
  return (
    <>
      <div className="service-detail-header p-3 pb-md-4 mx-auto text-center">
        <div className="headers d-flex align-items-center justify-content-center">
          <h1 className="display-5 fw-medium d-inline-block">
            {serviceDetail?.service?.category.name}
          </h1>
          <i className="fa-solid fa-chevron-right fs-2 px-3"></i>
          <h2 className="display-6 fw-semibold d-inline-block">
            {serviceDetail?.service?.name}
          </h2>
        </div>
        <p className="fs-5 text-muted">{serviceDetail.service?.description}</p>
      </div>

      {serviceDetail?.blogs && (
        <Row>
          <div className="service-detail-header p-3 pb-md-4 mx-auto text-center">
            <div className="headers">
              <h2 className="display-5 fw-semibold d-inline-block">
                Latest Blog Posts
              </h2>
            </div>
          </div>
          {serviceDetail?.blogs.map((blog) => (
            <div key={blog.id} className="col-md-6">
              <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-primary-emphasis">
                    {blog.title}
                  </strong>
                  {/* <h3 className="mb-0">{blog.id}</h3> */}
                  <div className="mb-1 text-body-secondary">
                    <i className="fa-regular fa-clock text-primary"></i>&nbsp;
                    {blog.updated_at
                      ? formatDate(blog.updated_at)
                      : formatDate(blog.created_at)}
                  </div>
                  <p className="card-text mb-auto">
                    {TruncateText(blog.content, 100)}
                  </p>
                  <Link
                    to={`/blog/${blog?.slug}`}
                    className="icon-link gap-1 icon-link-hover stretched-link text-decoration-none "
                  >
                    Continue reading
                    <div className="d-flex align-items-center justify-content-center  p-2 ">
                      <i className="fa-solid fa-chevron-right"></i>
                      <i className="fa-solid fa-chevron-right "></i>
                    </div>
                  </Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <img
                    src={blog.image}
                    className="card-img"
                    width="200"
                    height="250"
                    role="img"
                  />
                </div>
              </div>
            </div>
          ))}
        </Row>
      )}
    </>
  );
};

export default ServiceDetailPage;
