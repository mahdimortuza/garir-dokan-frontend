import Car from "../Car/Car";
import ContactUs from "../ContactUs/ContactUs";
import Slider from "../Slider/Slider";
import Subscribe from "../Subscribe/Subscribe";
import Hero from "./Hero/Hero";
import Tab from "./Tab";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Slider></Slider>
            <Car></Car>
            <Subscribe></Subscribe>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;