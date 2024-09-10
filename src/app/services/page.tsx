import Image from "next/image";



export default function Services() {
  return (
    <>
     <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-3xl font-medium title-font animate-bounce text-gray-900 mb-4 " data-aos="fade-down" data-aos-duration="3000">
        <span className="text-red-600 font-serif font-bold">S</span>ervices
      </h1>
      <div className="flex justify-center" data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="600"
     data-aos-offset="0">
        <div className="w-[120px] h-1 rounded-full bg-[#8433ee] inline-flex" />
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6" data-aos="fade-up"
     data-aos-duration="3000">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center" >
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <Image width="60" height="60" src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-web-development-coding-tanah-basah-basic-outline-tanah-basah.png" alt="external-web-development-coding-tanah-basah-basic-outline-tanah-basah"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font mb-3 font-serif font-bold">
            Web sevelopment
          </h2>
          <p className="leading-relaxed text-base">
          Expert web development services to bring your ideas to life. From conceptualization to deployment, I craft robust, scalable, and secure web applications that meet your business needs. With proficiency in modern technologies and frameworks, I deliver high-quality solutions that drive results.
          </p>
          
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <Image width="66" height="66" src="https://img.icons8.com/external-outline-design-circle/66/external-Web-Designing-web-design-and-development-outline-design-circle.png" alt="external-Web-Designing-web-design-and-development-outline-design-circle"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font mb-3 font-serif font-bold">
            Web design
          </h2>
          <p className="leading-relaxed text-base">
          Creative web designing solutions to captivate your audience. I design visually stunning, user-friendly, and engaging websites that reflect your brands identity. With a focus on aesthetics and functionality, I create websites that leave a lasting impression and drive business growth.
          </p>
          
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <Image width="64" height="64" className="mt-2" src="https://img.icons8.com/external-outline-wichaiwi/64/external-browser-digital-marketing-outline-wichaiwi.png" alt="external-browser-digital-marketing-outline-wichaiwi"/>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font mb-3 font-serif font-bold">
            Responsive Web Design
          </h2>
          <p className="leading-relaxed text-base">
          Responsive web design services to ensure seamless user experiences across devices. I craft mobile-friendly, tablet-friendly, and desktop-friendly websites that adapt to any screen size, ensuring optimal viewing and interaction. With responsive design, your website will be accessible and engaging for all users.
          </p>
          
        </div>
      </div>
    </div>
    <button data-aos="flip-down" className="flex mx-auto mt-16 text-black border-2 border-indigo-500  hover:bg-indigo-500 border-0 duration-700 py-2 px-4 focus:outline-none rounded font-bold">
      CONTACT ME
    </button>
  </div>
</section>

    </>
  );
}
