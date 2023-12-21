import { styles } from "../../../styles";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
const Banner = () => {
  const [text] = useTypewriter({
    words: ["Collaborate, Organize, Achieve – Dooito Does It All.."],
    loop: {},
  });

  return (
    <>
      <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
        <div className="text-center mt-[80px] h-[70vh] flex flex-col justify-center items-center">
          <h1 className={`${styles.bannerHeadText} text-white text-center`}>
            <span className="">
              Master Your Day,
              <br />
              The Dooito Way.
            </span>
          </h1>
          <p className={`${styles.bannerSubText} mt-2 text-center`}>
            {text}
            <Cursor></Cursor>
          </p>
          <Link to="/Login">
            <button className="bg-[#1F2937] my-3 text-white rounded-md px-5 py-3">
              Lets Explore
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Banner;
