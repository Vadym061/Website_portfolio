// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/deliveryPlus.jpg',
          git: 'GitHub',
          demo: 'Live Demo',
          linkgit: 'https://github.com/Vadym061/deliveryPlus',
          linklive: 'https://deliveryplus.netlify.app/'
        },
        {
          title: 'title',
          path: '/BestLaptop.png',
          git: 'GitHub',
          demo: 'Live Demo',
          linkgit: 'https://github.com/DimaTkachenko95/-fe_4_online_final_project_1.git',
          linklive: 'https://best-laptop24.onrender.com/'
        },
        {
          title: 'title',
          path: "/GiardDisign.png",
          git: 'GitHub',
          demo: 'Live Demo',
          linkgit: 'https://github.com/Vadym061/adRespect',
          linklive: 'https://giarddesignadrespect.netlify.app/'
        },
        {
          title: 'title',
          path: '/TheHam.png',
          git: 'GitHub',
          demo: 'Live Demo',
          linkgit: 'https://github.com/Vadym061/TheHam.git',
          linklive: 'https://magical-sopapillas-918a9d.netlify.app/'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/Roller.png',
          git: 'GitHub',
          demo: 'Live Demo',
          linkgit: 'https://github.com/Vadym061/Roller.git',
          linklive: 'https://elaborate-piroshki-f36a5f.netlify.app/'
        },
        {
          title: 'title',
          path: '/Realestate.png',
          git: 'GitHub',
          demo: 'Live Demo',
          linkgit: 'https://github.com/Vadym061/Realestate/tree/main/Realestate',
          linklive: 'https://majestic-bunny-b59969.netlify.app/'
        },
        {
          title: 'title',
          path: '/Forkio.png',
          git: 'GitHub',
          demo: 'Live Demo',
          linkgit: 'https://github.com/Vadym061/Forkio.git',
          linklive: 'https://comforting-kashata-59afc3.netlify.app/'
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import {BsArrowRight} from 'react-icons/bs';

import Image from "next/image";
import Link from "next/link";



const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index)=>{
        return(
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image,index)=>{
                return(
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image src={image.path} width={500} height={300} alt=""/>
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      <div className="absolute bottom-[-40px] translate-y-full group-hover:-translate-y-10 group-hover:xl-translate-y-20 transition-all duration-300">
                        <div className="flex flex-wrap items-center gap-x-2 text-[13px] h-[70px] tracking-[0.2em]">
                          <div className="delay-100">
                            <Link href={`${image.linkgit}`} target="_blank" className="bg-black p-2  rounded-md">{image.git}</Link>
                          </div>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            <Link href={`${image.linklive}`} target="_blank" className="bg-black p-2 rounded-md">{image.demo}</Link>
                          </div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default WorkSlider;
