import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import HeroPage from "../components/HeroPage";
import Feature from "../components/Feature";
import Testimonial from "../components/Testimonial";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import AboutUs from "../components/About";
import Contact from "../components/Contact";
import Promo from "../components/Promo";


const LandingLayout = ()=> {
    return (
        <div className="bg-white relative isolate gap-y-10 ">
            <Navbar/>
            <Landing/>
            <Feature/>
            {/*<Promo/>*/}
            <Testimonial/>
            <Pricing/>
            <Footer/>
        </div>
    )
}

export default LandingLayout