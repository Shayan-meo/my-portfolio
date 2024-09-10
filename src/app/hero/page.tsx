"use client"
import Image from "next/image";
import me from "../../../me.jpg"
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import pro2 from "../../../meai.png"
import herobg from "../../../herobg.png"

export default function Hero() {
    return (
      <>
       <section className="text-black body-font" >
  <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center" >
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" data-aos="fade-right" data-aos-duration="2000">
      <h1 className="font-bold text-xl text-black">    
  <span className="text-blue-600 mr-2">Hello</span>, I am a  
</h1>   
   <h1 className="title-font sm:text-4xl text-3xl mb-5 text-red-600 font-sans font-bold">
        <div>
        <Typewriter
  options={{
    strings: ['web developer','web designer'],
    autoStart: true,
    loop: true,
  }}
/>
</div>
      </h1>
      <br />
      <p className="mb-12 leading-relaxed text-black text-[18px] font-sans">
        Imagine. Code. Create. This is my mantra as a web developer. <br /> With a passion for innovation and a keen eye for detail, <br /> I bring digital visions to life.
      </p>
      <div className="flex justify-center">
        <Link href="https://github.com/ahsen-adil">
        <button className="inline-flex animate-bounce text-white bg-gray-500 border-0 transition duration-700 py-2 px-6 rounded-full focus:outline-none hover:bg-blue-600 rounded text-lg">
          <GitHubLogoIcon className="h-[30px] w-[30px]"/>
        </button>
        </Link>
        <Link href="https://www.linkedin.com/in/ahsan-adil-48522b290/">
        <button className="ml-4 inline-flex animate-bounce text-white bg-blue-600 rounded-full transition duration-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500  rounded text-lg">
          <LinkedInLogoIcon className="h-[30px] w-[30px]"/>
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/5" data-aos="flip-down" data-aos-duration="2000">
    <div className="mockup-phone ">
  <div className="camera"></div>
  <div className="display">
    <div className="artboard artboard-demo phone-1 hover:scale-150 duration-700 "><Image src={herobg} alt="me"/></div>
  </div>
</div>
    </div>
  </div>
</section>

      </>
    );
  }
  