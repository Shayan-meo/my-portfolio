import Image from "next/image"
import food from "../../../food-website.jpg"
import search from "../../..//image-search.webp"
import trading from "../../../trading.jpg"
import weather from "../../../weather.jpg"
import google from "../../../search.jpg"
import recipe from "../../../recipe.jpg"
import table from "../../../table-generator.jpg"
import coffee from "../../../coffee.avif"
import Link from "next/link"

export default function Project() {
  return (
    <>
     <section className="text-gray-900 body-font">
  <div className="container px-5 py-14 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="text-4xl font-medium title-font animate-bounce mb-4 text-gray-900" data-aos="fade-down" data-aos-duration="3000">
        <span className="text-red-600 font-serif font-bold" >P</span>rojects
      </h1>
      
    </div>
    <div className="flex flex-wrap -m-4">
    <div className="pb-4 lg:w-1/4 md:w-1/2 border-4 border-blue-400 rounded-[20px]" data-aos="flip-right" data-aos-duration="2000">
        <div className="h-full flex flex-col items-center text-center">
        <Link href="https://coffee-web-rho.vercel.app/"><Image src={coffee} alt="coffee" className="h-[190px] rounded-[20px]"></Image></Link>
          <div className="w-full">
          <h2 className="title-font font-medium text-2xl font-mono font-bold text-black mt-3">
              <span className="text-red-500">Coffee</span> website
            </h2>
            <p className="mb-4">
            I built Weather forecast using TypeScript, a robust and scalable weather app for accurate forecasts.            </p>
            
          </div>
        </div>
      </div>
      
      <div className="pb-4 lg:w-1/4 md:w-1/2 border-4 border-blue-400 rounded-[20px]" data-aos="flip-right" data-aos-duration="2000" >
        <div className="h-full flex flex-col items-center text-center">
        <Link href="https://food-responsive-website.vercel.app/"><Image src={food} alt="food" className="h-[190px] rounded-[20px]"></Image></Link>
          <div className="w-full">
            <h2 className="title-font font-medium text-2xl font-mono font-bold text-black mt-3">
              <span className="text-red-500">Food</span> website
            </h2>
            <p className="mb-4">
            A mouth-watering food website designed to tantalize your taste buds. Built using HTML, CSS, and JavaScript, this website showcases a variety of dishes.
            </p>
            
          </div> 
        </div>
      </div>
      
      <div className="pb-4 lg:w-1/4 md:w-1/2 border-4 border-blue-400 rounded-[20px]" data-aos="flip-right" data-aos-duration="2000">
        <div className="h-full flex flex-col items-center text-center">
        <Link href="/"><Image src={search} alt="search" className="h-[190px] rounded-[20px]"></Image></Link>
          <div className="w-full">
          <h2 className="title-font font-medium text-2xl font-mono font-bold text-black mt-3">
              <span className="text-red-500">Image</span> search app
            </h2>
            <p className="mb-4">
            I built this image search app using HTML, CSS, and JavaScript, allowing users to search for their desired images.            </p>
            
          </div>
        </div>
      </div>
      <div className="pb-4 lg:w-1/4 md:w-1/2 border-4 border-blue-400 rounded-[20px]" data-aos="flip-right" data-aos-duration="2000">
        <div className="h-full flex flex-col items-center text-center">
        <Link href="https://trading-website-phi.vercel.app/"><Image src={trading} alt="trading" className="h-[190px] rounded-[20px]"></Image></Link>
          <div className="w-full">
          <h2 className="title-font font-medium text-2xl font-mono font-bold text-black mt-3">
              <span className="text-red-500">Trading</span> website
            </h2>
            <p className="mb-4">
            This is a trading website I developed with React.js, offering real-time market data and analysis.            </p>
            
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
<section className="text-gray-600 body-font">
  <div className="container px-5 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="pb-4 lg:w-1/4 md:w-1/2 border-4 border-blue-400 rounded-[20px]" data-aos="flip-right" data-aos-duration="2000">
        <div className="h-full flex flex-col items-center text-center">
         
        <Link href="https://github.com/ahsen-adil/recipe-search-project-typescript.git"><Image src={recipe} alt="google search app" className="h-[190px] rounded-[20px]"></Image></Link>
          <div className="w-full">
          <h2 className="title-font font-medium text-2xl font-mono font-bold text-black mt-3">
              <span className="text-red-500">Recipe</span> search
            </h2>
            <p className="mb-4">
            I built Recipe app using TypeScript, a fast and efficient recipe search app for food enthusiasts.            </p>
            
          </div>
        </div>
      </div>
      <div className="pb-4 lg:w-1/4 md:w-1/2 border-4 border-blue-400 rounded-[20px]" data-aos="flip-right" data-aos-duration="2000">
        <div className="h-full flex flex-col items-center text-center">
          
        <Link href="https://github.com/ahsen-adil/google-search-project-typescript.git"><Image src={google} alt="recipe" className="h-[190px] rounded-[20px]"></Image></Link>
          <div className="w-full">
          <h2 className="title-font font-medium text-2xl font-mono font-bold text-black mt-3">
              <span className="text-red-500">Google</span> search app
            </h2>
            <p className="mb-4">
            I built google Search app using TypeScript, a scalable and efficient search engine inspired by Google Search.            </p>
            
          </div>
        </div>
      </div>
      <div className="pb-4 lg:w-1/4 md:w-1/2 border-4 border-blue-400 rounded-[20px]" data-aos="flip-right" data-aos-duration="2000">
        <div className="h-full flex flex-col items-center text-center">
          
        <Link href="https://github.com/ahsen-adil/table-generator-typescript.git"><Image src={table} alt="quiz app" className="h-[190px] rounded-[20px]"></Image></Link>
          <div className="w-full">
          <h2 className="title-font font-medium text-2xl font-mono font-bold text-black mt-3">
              <span className="text-red-500">Table</span> Generator
            </h2>
            <p className="mb-4">
            I built Math table generator using TypeScript, a fast and efficient math table generator for students and teachers.            </p>

          </div>
        </div>
      </div>
      <div className="pb-4 lg:w-1/4 md:w-1/2 border-4 border-blue-400 rounded-[20px]" data-aos="flip-right" data-aos-duration="2000">
        <div className="h-full flex flex-col items-center text-center">
        <Link href="https://github.com/ahsen-adil/weather-api-project-typescript.git"><Image src={weather} alt="weather" className="h-[190px] rounded-[20px]"></Image></Link>
          <div className="w-full">
          <h2 className="title-font font-medium text-2xl font-mono font-bold text-black mt-3">
              <span className="text-red-500">Weather</span> Forecast
            </h2>
            <p className="mb-4">
            I built Weather forecast using TypeScript, a robust and scalable weather app for accurate forecasts.            </p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
