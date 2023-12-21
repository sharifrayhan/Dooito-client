import { motion } from "framer-motion";
import { arrow } from "../../../assets/index";


const WhyUs = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const cardHover = {
    scale: 1.05,
    transition: { duration: 0.3 },
  };

  return (
    <div className="my-5 shadow-element mx-4 py-11">
      <div className="text-center my-3">
        <h1 className="text-3xl font-bold">Why Us?</h1>
        <p className="text-gray-600 mt-2">
          Designed to simplify your workflow and boost collaboration, Dooito empowers you to master your day with precision.
        </p>
      </div>

      <motion.div
        className="relative mt-16 flex gap-11 flex-col lg:flex-row justify-between p-8 items-center"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        {/* Card 1 */}
        <motion.div
          className="text-center cursor-pointer w-[250px] md:w-[600px] relative"
          variants={cardVariants}
          whileHover={cardHover}
        >
          <div className="purple-text-gradient absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[150px] font-bold bg-gradient-to-b mb-2">
            1
          </div>
          <h3 className="sticky text-2xl font-extrabold">Its Free</h3>
          <p className="sticky">
            Just create a new account following simple steps and you are ready to go.
          </p>
        </motion.div>

        <img src={arrow} alt="Arrow" className="arrow-icon" />

        {/* Card 2 */}
        <motion.div
          className="text-center cursor-pointer w-[250px] md:w-[600px] relative"
          variants={cardVariants}
          whileHover={cardHover}
        >
          <div className="purple-text-gradient absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[150px] font-bold bg-gradient-to-b mb-2">
            2
          </div>
          <h3 className="sticky text-2xl font-extrabold">Easy to Use</h3>
          <p className="sticky">
            No such complexity, dooito is designed in a way that anyone can learn to use it in no time.
          </p>
        </motion.div>

        <img src={arrow} alt="Arrow" className="arrow-icon" />

        {/* Card 3 */}
        <motion.div
          className="text-center cursor-pointer w-[250px] md:w-[600px] relative"
          variants={cardVariants}
          whileHover={cardHover}
        >
          <div className="purple-text-gradient absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[150px] font-bold bg-gradient-to-b mb-2">
            3
          </div>
          <h3 className="sticky text-2xl font-extrabold">All in One</h3>
          <p className="sticky">
            All your options are placed in one place, makes it more user-friendly.
          </p>
        </motion.div>
      </motion.div>

    </div>
  );
};

export default WhyUs;
