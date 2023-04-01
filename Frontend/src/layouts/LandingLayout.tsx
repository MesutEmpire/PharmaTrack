import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Feature from "../components/Feature";
import Testimonial from "../components/Testimonial";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const LandingLayout = () => {
  return (
    <div className="bg-white relative isolate gap-y-10 ">
      <Navbar />
      <Landing />
      <Feature />
      <Testimonial />
      <Pricing />
      <Footer />
    </div>
  );
};

export default LandingLayout;
