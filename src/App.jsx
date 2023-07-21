import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./pages/main-page";
import AboutUsPage from "./pages/about-us/about-us-page";
import VisionMissionPage from "./pages/about-us/vision-mission-page";
import ContactUsPage from "./pages/about-us/contact-us-page";
import PrivacyPolicyPage from "./pages/about-us/privacy-policy-page";
import TermsPage from "./pages/about-us/terms-page";
import LoginPage from "./pages/auth/login-page";
import RegisterPage from "./pages/auth/register-page";
import { useSelector } from "react-redux";

function App() {
  const categoryState = useSelector((state) => state.categoryState);

  /*
/
/category/:slug
/services/:slug
/auth/login
/auth/register
/user
/logout

 /about-us
 /about-us/vision-mission
 /about-us/contact-us
 /about-us/privacy-policy
 /about-us/terms

*/

  return (
    <div className="container  py-3">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        <Route path="/about-us">
          <Route index element={<AboutUsPage />} />
          <Route path="vision-mission" element={<VisionMissionPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms" element={<TermsPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
