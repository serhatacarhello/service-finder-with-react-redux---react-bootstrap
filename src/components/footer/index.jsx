import BootstrapLogo from "../../assets/svg/bootstrap-logo.svg";
import LinksContainer from "./components/links-container";

const Footer = () => {
  return (
    <>
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img
              className="mb-2"
              src={BootstrapLogo}
              alt=""
              width="24"
              height="19"
            />
            <small className="d-block mb-3 text-muted">&copy;2023</small>
          </div>
          <LinksContainer
            title="Categories"
            links={[
              { url: "test", title: "Example Link 1" },
              { url: "test", title: "Example Link 2" },
              { url: "test", title: "Example Link 3" },
              { url: "test", title: "Example Link 4" },
              { url: "test", title: "Example Link 5" },
              { url: "test", title: "Example Link 6" },
            ]}
          />
          <LinksContainer
            title="About Us"
            links={[
              { url: "about-us", title: "About Us" },
              { url: "about-us/vision-mission", title: "Vision & Mission" },
              { url: "about-us/contact-us", title: "Contact Us" },
              { url: "about-us/privacy-policy", title: "Privacy Policy" },
              { url: "about-us/terms", title: "Terms" },
            ]}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
