import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";

export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Punctuality",
    description:
      'Always meeting deadlines. I take responsibility for my work. I respond quickly to messages. Always in touch.',
  },
  {
    icon: <RxPencil2 />,
    title: "Qualitatively",
    description:
      'When performing the work, the maximum compliance of the layout. Adherence to all indents and dimensions.',
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      'Action according to a clearly defined technical task. Minimal changes after the agreement of the parties.',
  },
  {
    icon: <RxReader />,
    title: "Validity",
    description:
      'Clean valid code according to the BEM methodology, compliance with all standards, tags and selector.',
  },
  {
    icon: <RxRocket />,
    title: "Layout",
    description:
      'Robots adapt to all devices and also work for browsers. Your site looks very nice on different devices and browsers.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index)=>{
        return(
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-6 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div>
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default ServiceSlider;
