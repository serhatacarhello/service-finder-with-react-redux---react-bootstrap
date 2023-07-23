import { useSelector } from "react-redux";
import AllServices from "./components/all-services";
import { Link } from "react-router-dom";
import formatDate from "../../utils/DateUtils";
import SubHeader from "../../components/subHeader";
import Search from "./components/search";

export default function MainPage() {
  const categories = useSelector((state) => state.categoryState.categories);
  // console.log("🚀 ~ file: index.jsx:5 ~ MainPage ~ categories:", categories);

  return (
    <>
      <main className="position-relative">
        <SubHeader title={" Welcome To Service Finder Project"}>
          <p className="fs-5 text-muted">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It’s built with default
            Bootstrap components and utilities with little customization.
          </p>
        </SubHeader>
        <Search />
        <div className="popular-services-header p-3 pb-md-4 mx-auto text-center">
          <h4 className="display-5 fw-normal">Popular Services</h4>
          <div className="row row-cols-1 row-cols-lg-3 mb-3 text-center">
            {categories.slice(5, 8).map((category) => (
              <div className="col" key={category.id}>
                <div className="card mb-4 rounded-3 shadow-sm border-primary">
                  <div className="card-header py-3 text-bg-primary border-primary">
                    <h4 className="my-0 fw-normal text-nowrap">
                      {category.name}
                    </h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      ${category.id}
                    </h1>
                    <ul className="list-unstyled mt-3 mb-4">
                      <li>
                        Created Date:&nbsp;{formatDate(category.created_at)}
                      </li>
                      <li>
                        Updated Date:&nbsp;{formatDate(category.updated_at)}
                      </li>
                      <li>Phone and email support</li>
                      <li>Help center access</li>
                    </ul>
                    <Link
                      to={`/category/${category.slug}`}
                      type="button"
                      className="w-100 btn btn-lg btn-primary"
                    >
                      <i className="fa-solid fa-magnifying-glass-arrow-right fs-4 "></i>
                      &nbsp;Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center  w-100 position-sticky">
          <h3 className="display-5 fw-normal">All Services</h3>
          <AllServices categories={categories} />
        </div>
      </main>
    </>
  );
}
