import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"; // CSS stil dosyasını içeri aktarın
import { Link } from "react-router-dom";

const AllServices = ({ categories }) => {
  const options = {
    type: "loop",
    drag: "free",
    focus: "center",
    autoplay: true,
    interval: 2000,
    // rewind: true,
    gap: ".25rem",
    perPage: 4,
    pagination: false,
    breakpoints: {
      1250: {
        perPage: 4,
        gap: ".7rem",
        height: "9rem",
      },
      640: {
        perPage: 3,
        gap: ".7rem",
        height: "6rem",
      },
      480: {
        perPage: 1,
        gap: ".7rem",
        height: "6rem",
      },
    },
  };

  return (
    <Splide
      options={options}
      aria-labelledby="autoplay-all-services-categories"
      hasTrack={false}
    >
      <div className="row" style={{ position: "relative" }}>
        <SplideTrack>
          {categories.map((category) => (
            <SplideSlide key={category.id}>
              <Link to={`category/${category.slug}`}>
                <div className="card card-text-center position-relative">
                  <div className="card-body d-flex align-items-center justify-content-center bg-primary text-light p-5  rounded ">
                    <h5 className="card-title text-wrap position-absolute overflow-hidden">
                      {category.name}
                    </h5>
                  </div>
                  <img
                    style={{ minWidth: "100%", aspectRatio: 1 }}
                    src={category.image}
                    className="card-img-bottom img-fluid rounded mx-auto"
                    alt={category.name}
                  />
                  {/* <Link
                    to={`/category/${category.slug}`}
                    type="button"
                    className="w-100 btn btn-lg btn-primary"
                  >
                    <i className="fa-solid fa-magnifying-glass-arrow-right fs-4 "></i>
                    &nbsp;Details
                  </Link> */}
                </div>
              </Link>
            </SplideSlide>
          ))}
        </SplideTrack>
      </div>
    </Splide>
  );
};

export default AllServices;
