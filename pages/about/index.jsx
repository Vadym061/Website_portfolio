import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image"
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGulp,
  FaNpm,
} from "react-icons/fa";


import {
  SiTailwindcss,
  SiSass,
  SiAdobephotoshop,
  SiMongodb,
  SiGmail,
  SiRedux,
  SiBootstrap,
  SiGithub,
} from "react-icons/si";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          {
            id: 1,
            icn: <FaHtml5 className="text-[#ff8700] text-[19px]"/>
          },
          {
            id: 2,
            icn: <FaCss3 className="text-[#0014ff] text-[19px]" />
          },
          {
            id: 3,
            icn: <FaJs className="text-[#fffa00] text-[19px]"/>
          },
          {
            id: 4,
            icn: <FaReact className="text-[#00c3ff] text-[19px]"/>
          },
          {
            id: 5,
            icn: <FaGulp className="text-[#ff0000] text-[19px]"/>
          },
          {
            id: 6,
            icn: <SiTailwindcss className="text-[#0087ff] text-[19px]"/>
          },
          {
            id: 7,
            icn: <SiSass className="text-[#ff008c] text-[19px]"/>
          },
          {
            id: 8,
            icn: <FaNpm className="text-[#ff3500] text-[19px]"/>
          },
          {
            id: 9,
            icn: <SiRedux className="text-[#ff00ff] text-[19px]"/>
          },
          {
            id: 10,
            icn: <SiBootstrap className="text-[#a034a0] text-[19px]"/>
          },
          {
            id: 11,
            icn: <SiGithub className="text-[#fff] text-[19px]"/>
          }
        ],
      },
      {
        title: "Backend",
        icons: [
          {
            id: 1,
            icn: <FaNodeJs className="text-[#009604] text-[20px]"/>
          },
          {
            id: 2,
            icn: <SiMongodb className="text-[#00df06] text-[20px]"/>
          }
      ],
      },
      {
        title: "Design",
        icons: [
          {
            id: 1,
            icn: <FaFigma className="text-[#9700df] text-[20px]"/>
          },
          {
            id: 2,
            icn: <SiAdobephotoshop className="text-[#0c18d1] text-[20px]"/>
          }
      ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Frontend Developer - DAN.IT Education Certificate",
        stage: "2023",
      },
      {
        link: "https://dan-it.com.ua/certificates/frontend/shtyra-vadym/",
        text: "Open link Certificate",
        img: [
          {
            id: 1,
            dan: "/Certificate.png"
          }
        ],
      },
    ],
  },
  {
    title: "experience",
    
    info: [
      {
        title: "Frontend developer - DanIT Education, Student",
        stage: "2021 - 2023",
      },
      {
        title: "Frontend Developer - Freelancehunt",
        stage: "2022 - 2023",
      },
    ],
  },
  {
    title: "credentials",
    
    info: [
      {
        title: "Frontend developer - DanIT Education, Kyiv, Ukraine",
        stage: "2021 - 2023",
      },
      {
        title: "Frontend Developer - Foxminded, Kyiv, Ukraine",
        stage: "2021",
      },
      {
        title: "Сomputer Operator - Kyiv Professional Lyceum",
        stage: "2007/2010",
      },
    ],
  },
  
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div id="about" className="h-full bg-primary/30 pt-25 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[150px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 z-10 mt-[80px] flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-[25px] mb-2 xl:mb-4 xl:pt-0 xl:text-[54px]"
          >
            My <span className="text-turquoise">experience</span> and practice.
          </motion.h2>
          <motion.h3
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[490px]  mx-auto xl:mx-0 mb-2 xl:mb-12 px-2 xl:px-0"
          >
              <Typewriter
            options={{
              delay: 50,
              strings: ["I am a Frontend programmer with experience in creating web solutions.", "I built sites from scratch and improved existing solutions by working in a team with other developers."],
              autoStart: true,
              loop: true,
              pauseFor: 3500,
            }}
          />
          </motion.h3>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={15} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experiance
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={7} duration={10} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[49%] h-[480px]"
        >
          <div className="flex flex-wrap justify-center gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  <div className="flex">
                  {item.title}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <a
                    href={`${item.link}`}
                    className="hover:text-accent transition-all duration-300"
                    target="_blank"
                  >
                    {item.text}
                  </a>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>

                  <div className="flex gap-x-4 flex-wrap justify-center">
                    {item.icons?.map((icon, itemIndex) => {
                      return <div key={icon.id} className="text-2-xl text-white">{icon.icn}</div>;
                    })}
                  </div>
                  <div className="flex gap-x-4">
                    {item.img?.map((image, itemIndex) => {
                      return (
                        <Image
                        key={image.id}
                          src={image.dan}
                          width={300}
                          height={150}
                          className="text-2-xl text-white"
                        />
                      );
                    })}
                  </div>

                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
