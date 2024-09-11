
import Image from "next/image";
import skillbg from "../../../skillbg.jpg"
import { SiHtml5 } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { FaJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io5";

export default function Skills() {
    return (
      <>
     <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap" >
  <h1 className="items-center justify-center flex text-5xl animate-bounce text-black" data-aos="zoom-out-right" data-aos-duration="2000">
     <span className="text-red-500 font-serif font-bold">S</span>kills
     </h1>
    <div className="flex flex-wrap w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6" data-aos="zoom-out-right" data-aos-duration="2000">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center" >
            <div className="h-full w-1 bg-gray-300 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
          <SiHtml5 className="h-[200px] w-[200px] text-[#e34c26]"/>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider lg:text-2xl">
              Html
            </h2>
            <p className="leading-relaxed">
              
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
          <IoLogoCss3 className="h-[300px] w-[300px] text-[#264de4]"/>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider lg:text-2xl">
              Css / Tailwind Css
            </h2>
            <p className="leading-relaxed">
              
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
          <FaJs className="h-[40px] w-[50px] text-[#f0db4f]"/>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider lg:text-2xl">
              Javascript / Typescript
            </h2>
            <p className="leading-relaxed">
              
            </p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
          <TbBrandReactNative className="h-[200px] w-[200px] text-[#318094]"/>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider lg:text-2xl">
              React.js / Next.js 
            </h2>
            <p className="leading-relaxed">
              
            </p>
          </div>
        </div>
        
        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
          <IoLogoNodejs className="h-[200px] w-[200px] text-[#3c873a]"/>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider lg:text-2xl">
              Node.js
            </h2>
            <p className="leading-relaxed">
              
            </p>
          </div>
        </div>
      </div>
      {/* <img
        className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
        src=""
        alt="step"
      /> */}
      <Image data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" src={skillbg} alt="programing image" height={200} width={600} className="lg:ml-[100px]"/>
    </div>
  </div>
</section>

      </>
    );
  }
  