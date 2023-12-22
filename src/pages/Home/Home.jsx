import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import {dooito_cover} from "../../assets/index"
import WhyUs from "./Components/WhyUs";
import Footer from "./Components/Footer";

const Home = () => {

    const bgStyle = {
        backgroundImage: `url(${dooito_cover})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
      };

  return (
    <div className=" max-w-8xl">
      <div style={bgStyle}>
      <Navbar></Navbar>
      <Banner></Banner>
      </div>
      <WhyUs></WhyUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
