import { Link } from "react-router-dom";
import formatDate from "../../../utils/DateUtils";
import TruncateText from "./../../../utils/TextUtils";

const Blogs = ({ categoryDetail }) => {
  const blogData = categoryDetail?.blogs;
  // console.log("🚀 ~ file: Blogs.jsx:3 ~ Blogs ~ blogData:", blogData);

  const maxLengthToShow = 75;
  return (
    <>
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-5 fw-bolder">Latest Blog Posts</h1>
      </div>
      {blogData?.map((blog) => (
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
                {TruncateText(blog.content, maxLengthToShow)}
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
    </>
  );
};

export default Blogs;
