import Head from 'next/head'
import Image from 'next/image'
import {useEffect, useRef, useState} from "react"
import bulb from "../assets/bulb_left.png"
import envelope from "../assets/envelope_front.png"
import headphone from "../assets/headphone_front.png"
import heart from "../assets/heart_front.png"
import message from "../assets/message_front.png"
import me from "../assets/julian-wan-WNoLnJo7tS8-unsplash-removebg-preview.png"
import data from "../assets/data"

export default function Home() {
  const images = useRef()
  const images2 = useRef()
    
  return (
    <div className="h-auto w-80% mx-auto 1440:w-50%">
      <Head>
        <title>John Doe - Full Stack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div onMouseMove={(e) => {
        const x = (e.clientX / 50)
        const y = (e.clientY / 50)
        images.current.style.transform = `translateX(${x}px) translateY(${y}px)`
        images2.current.style.transform = `translateX(${-x}px) translateY(${-y}px)`
      }} className="h-85vh flex">
        <div className="w-60% md2:w-full h-full flex flex-col justify-center">
          <p className="text-sm mb-4 text-gray-500 font-poppins">{data.name}</p>
          <h1 className="text-7xl md:text-5xl mb-4 text-primary font-poppins font-bold">{data.role} <span className="text-secondary">.</span></h1>
          <h3 className="text-md mb-8 font-poppins font-semibold italic text-black">{data.tagline}</h3>
          <button className="w-44 h-12 rounded bg-secondary text-white font-poppins"><a href="#contact">Get in touch</a></button>
        </div>
        <div className="w-40% md2:hidden h-full flex flex-col items-center justify-center">
            <div className="absolute md2:hidden" ref={images} transition-all transition-1000>
              <Image  width={150} height={150} src={headphone}/>
              <Image width={150} height={150} src={heart}/>
            </div>
            <div className="relative flex flex-col" ref={images2} transition-all transition-1000>
              <Image  width={150} height={150} src={bulb}/>
              <Image  width={150} height={150} src={message}/>
            </div>
        </div>
      </div>
      <div id="about" className="h-85vh 1440:h-50vh md:h-150vh xsm:h-160vh w-full flex md:flex-col">
        <div className="w-1/2 md:w-full md:h-40% h-full flex items-center justify-start">
          <div className="w-90% md:h-full md:w-full h-80% 1440:h-70% bg-primary flex items-end justify-center">
            <Image width={400} height={400} src={me} />
          </div>
        </div>
        <div className="w-1/2 md:w-full md:h-60% h-full flex flex-col justify-center">
          <h2 className="text-4xl md:text-3xl mb-8  font-poppins font-semibold text-secondary">About Me</h2>
          <p className="text-lg md:text-md mb-4 font-poppins text-black">{data.aboutme}</p>
          <button className="w-44 h-12 rounded bg-secondary text-white font-poppins mt-4"><a href="#contact">Let's Talk</a></button>
        </div>
      </div>
      <div className="min-h-30vh flex flex-col justify-center w-full">
        <h2 className="text-4xl md:text-3xl mb-8  font-poppins font-semibold text-secondary">Skills</h2>
        <div className="grid grid-cols-7 md2:grid-cols-2 w-full">
          {data.skills.map(skill => (
              <div className="w-32 mb-4 mr-10 rounded h-10 bg-primary flex items-center justify-center">
                <p className="font-poppins text-white">{skill}</p>
              </div>
          ))}
        </div>
      </div> 
      <div id="projects" className="min-h-screen md:mt-10 1440:min-h-50vh flex flex-col justify-center w-full">
        <h2 className="text-4xl md:text-3xl mb-12  font-poppins font-semibold text-secondary">Selected Projects</h2>
        {data.projects.map(project => (
            <div className="w-full flex mb-10 min-h-36">
                <p className="h-full md:text-lg font-semibold w-10% text-2xl font-poppins text-secondary flex items-center">{project.id}</p>                
                <div className="w-70% flex md:px-4 flex-col justify-center h-full">
                  <h4 className="text-2xl md:text-xl font-poppins mb-2 font-semibold">{project.name}</h4>
                  <p className="text-sm md:text-xs font-poppins">{project.projectDescription}</p>
                </div>
                <div className="w-20% h-full flex flex-col items-center justify-center">
                  <button className="w-32 md:h-12  md:w-20 md:text-xs bg-transparent rounded h-10 mb-4 border border-secondary text-secondary"><a target="_blank" href={project.codeLink}>View Code</a></button>
                  <button className="w-32 md:h-12 md:px-2 md:w-20 md:text-xs bg-secondary rounded h-10 border text-white"><a target="_blank" href={project.websiteLink}>Visit Website</a></button>
                </div>
            </div>
        ))}
      </div>
      <div id="contact" className="w-full 1440:h-50vh h-85vh flex flex-col justify-center">
          <h1 className="text-5xl md:text-2xl h-10% text-secondary font-semibold font-poppins">Have a cool idea?</h1>
          <h1 className="text-5xl md:text-2xl h-10% text-secondary font-semibold font-poppins">Let's make it happen.</h1>
          <form name="contact-form" method="post" data-netlify="true" onSubmit="submit" className="w-full flex flex-col justify-center h-60%">
            <input type="hidden" name="form-name" value="contact-form"/>
            <div className="flex md:flex-col w-full mb-10">
              <input name="name" required className="placeholder-secondary md:mb-8 px-2 focus:outline-none w-56 md:w-44 h-10 bg-transparent border-b-2 border-black mr-20" type="text" placeholder="Name*"/>
              <input name="email" className="placeholder-secondary px-2 focus:outline-none w-56 h-10 bg-transparent border-b-2 border-black" type="email" placeholder="Email*" required/>
            </div>
            <input name="message" className="placeholder-secondary px-2 focus:outline-none w-90% h-10 bg-transparent border-b-2 border-black" type="text" placeholder="Message*" required/>
            <button type="submit" className="w-44 mt-20 h-12 rounded bg-secondary text-white font-poppins mt-4">Reach out</button>
          </form>
      </div>
    </div>
  )
}

