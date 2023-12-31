//components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import Typewriter from "typewriter-effect";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

export const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mt-0 text-[25px] sm:mt-10 md:text-[54px] xl:mt-4"
            >
              My services <span className="text-turquoise">.</span>
            </motion.h2>
            <motion.h3
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[400px] mx-auto lg:mx-0"
            >
               <Typewriter
            options={{
              delay: 50,
              strings: [" I have a passion for coding. Exploring, learning every day, and gaining knowledge are all things I love about programming.", "The main benefit of this for me is that it never ends and will be withme throughout my life. Every day is a challenge and I accept it."],
              autoStart: true,
              loop: true,
              pauseFor: 3500,
            }}
          />
            </motion.h3>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
