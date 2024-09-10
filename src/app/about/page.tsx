"use client"

import Image from "next/image"
import meabc from "../../../meabc.jpg"
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"


export default function About() {
  useEffect(() => {
    AOS.init();
}, []);
    return (
      <>
       <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-19 items-center justify-center flex-col">
<Image data-aos="flip-left" data-aos-duration="3000" src={meabc} alt="me" height={200} width={200} className="rounded-full mb-4 hover:rounded-[10px] duration-700"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 animate-bounce font-medium text-gray-900 font-seri font-bold" data-aos="fade-down" data-aos-duration="3000">
      <span className="text-red-500 font-serif font-bold">A</span>bout Me
      </h1>
      <p className="mb-8 leading-relaxed text-black text-[18px] font-sans" data-aos="zoom-out-up" data-aos-duration="3000">
      I specialize in front-end development where I bring designs to life using languages like HTML CSS and JavaScript. Whether it is creating responsive layouts, implementing interactive features, or optimizing performance, I thrive on the challenges of turning ideas into code.
      But I am not just limited to the front end. I also have experience working with back-end technologies like Node.js and react.js and others
      </p>
      <div className="flex justify-center">
        <Link href="https://www.instagram.com/ahsen_meooo?igsh=MW5mdHcxYXF1Mml2dg==">
        <div className="inline-flex animate-bounce text-white border-0 py-2  focus:outline-none rounded text-lg" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <Image width="65" height="65" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
        </div>
        </Link>
        <Link href="https://www.facebook.com/AhsenAdil1?mibextid=ZbWKwL">
        <div className="ml-4 inline-flex animate-bounce text-gray-700 border-0 py-2 focus:outline-none rounded text-lg" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <Image width="65" height="65" src="https://img.icons8.com/color/48/facebook.png" alt="facebook"/>
        </div>
        </Link>
      </div>
    </div>
  </div>
  
  <hr />
</section>

      </>
    );
  }
  