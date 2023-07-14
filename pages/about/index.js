import React, { useState } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGulp,
  FaInstagram,
  FaNpm,
  FaFacebook,
  FaTelegram,
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
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <FaGulp />,
          <SiTailwindcss />,
          <SiSass />,
          <FaNpm />,
          <SiRedux />,
          <SiBootstrap />,
          <SiGithub />,
        ],
      },
      {
        title: "Backend",
        icons: [<FaNodeJs />, <SiMongodb />],
      },
      {
        title: "Design",
        icons: [<FaFigma />, <SiAdobephotoshop />],
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
        img: ["/Certificate.png"],
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
  {
    title: "connection",
    info: [
      {
        title: "Instagram",
        send: "Send a message",
        link: "https://www.instagram.com/direct/t/s_vadym1927/",
        icons: [<FaInstagram />],
      },
      {
        title: "Facebook",
        send: "Send a message",
        link: "https://m.me/100008227939102",
        icons: [<FaFacebook />],
      },
      {
        title: "Telegram",
        send: "Send a message",
        link: "tg://resolve?domain=Vadym061",
        icons: [<FaTelegram />],
      },
      {
        title: "Email",
        send: "Send a message",
        link: "mailto:vadymshtyra2311@gmail.com",
        icons: [<SiGmail />],
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
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[320px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 pt-10 xl:pt-0"
          >
            My <span className="text-turquoise">experience</span> and practice.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[490px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I am a Frontend programmer with experience in creating web
            solutions. I built sites from scratch and improved existing
            solutions by working in a team with other developers.
          </motion.p>
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
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
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
                  {item.title}
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

                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2-xl text-white">{icon}</div>;
                    })}
                  </div>
                  <div className="flex gap-x-4">
                    {item.img?.map((image, itemIndex) => {
                      return (
                        <img
                          src={image}
                          width={300}
                          height={150}
                          className="text-2-xl text-white"
                        />
                      );
                    })}
                  </div>

                  <a
                    href={`${item.link}`}
                    target="_blank"
                    className="hover:text-accent transition-all duration-300"
                  >
                    {item.send}
                  </a>
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
