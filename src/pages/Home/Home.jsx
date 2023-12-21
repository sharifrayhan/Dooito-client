import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import {dooito_cover} from "../../assets/index"
import WhyUs from "./Components/WhyUs";

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
    </div>
  );
};

export default Home;
