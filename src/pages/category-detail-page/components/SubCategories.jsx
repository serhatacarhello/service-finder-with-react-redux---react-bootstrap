import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SubCategories = ({ categoryDetail }) => {
  const data = categoryDetail?.category?.children;
  console.log("🚀 ~ file: SubCategories.jsx:6 ~ SubCategories ~ data:", data);
  if (data?.length < 1) return;

  return (
    <>
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-5 fw-bolder">Sub Categories</h1>
      </div>
      {data?.map((category) => (
        <Col
          md="11"
          lg="5"
          className="bg-info p-2 m-1 d-flex align-items-center justify-content-center "
          key={category.id}
        >
          <Link
            to={`/category/${category.slug}`}
            className="icon-link gap-1 icon-link-hover stretched-link text-decoration-none "
          >
            <div className="subcategory-detail">
              <h5 className="subcategory-header">
                <i className="fa-solid fa-arrow-right me-2"></i>
                {category.name}
              </h5>
              <p>{category.description} </p>
            </div>
          </Link>
        </Col>
      ))}
    </>
  );
};

export default SubCategories;
