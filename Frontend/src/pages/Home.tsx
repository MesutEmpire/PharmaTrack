import Navbar from "../components/Navbar";
import Landing from "../components/Hero";
import Feature from "../components/Feature";
import Testimonial from "../components/Testimonial";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

const HomePage = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <Feature />
            <Testimonial />
            <Pricing />
            <Footer />
        </div>
    );
};

export default HomePage;
