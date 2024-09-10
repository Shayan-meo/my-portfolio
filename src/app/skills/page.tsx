
import Image from "next/image";
import pro from "../../../ai.jpeg"
import skillbg from "../../../skillbg.jpg"

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
            <div className="h-full w-1 bg-gray-200 pointer-events-none" />
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
          <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
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
          <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
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
          <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
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
          <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-react-a-javascript-library-for-building-user-interfaces-logo-shadow-tal-revivo.png" alt="external-react-a-javascript-library-for-building-user-interfaces-logo-shadow-tal-revivo"/>
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
          <img width="48" height="48" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>
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
     data-aos-anchor-placement="center-bottom" src={skillbg} alt="programing image" height={200} width={600} className="lg:ml-[100px]"></Image>
    </div>
  </div>
</section>

      </>
    );
  }
  