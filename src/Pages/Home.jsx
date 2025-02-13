import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram }from"react-icons/fa";
const Home =  ( )=>{
    return(
        <section className="bg-[#f8f9fa] text-center items-center justify-center flex  flex-col h-screen sm:px-10">
            <img src="\Images\personimg2.jpg" alt="personimag" className=" mb-2.5 w-40 h-40 border-white border-2 rounded-full"/>
            <h1 className="text-[#333]  sm:text-5xl text-3xl font-medium">Hi, I'm Abdullah.</h1>
            <h2 className="text-[#555] sm:text-3xl text-2xl mt-2 "> I'm a <span className="text-[#007bff]">Frontend Developer</span></h2>
            <p className="text-[#555] text-xl mt-2 max-w-2xl ">I am a passionate Front-End
             Developer dedicated to crafting beautiful, user-friendly web experiences with a
             keen eye for design and a strong foundation in modern web technologies.</p>
            <div className="flex items-center mt-3.5 space-x-4 sm:flex-row">
             <button className="text-white text-xl bg-[#007bff] px-4 py-2 mt-2 rounded-4xl hover:bg-blue-600 transition-colors 
             duration-300 cursor-pointer ">Hire Me</button>
             <div className="flex space-x-4 mt-3">
               <a href="https://github.com//abdullahshafaqat" target="_blank" rel="nonreferrer nopener">
            <FaGithub className="text-[#333] text-3xl  mx-2 hover:text-[#007bff] transition-colors 
             duration-300 cursor-pointer"/>
               </a>
               <a href="https://www.linkedin.com/home" target="_blank" rel="nonreferrer nopener">
            <FaLinkedin className="text-[#333] text-3xl   mx-2 hover:text-[#007bff] transition-colors 
             duration-300 cursor-pointer"/>
               </a>
               <a href="https://www.instagram.com/accounts/emailsignup/" target="_blank" rel="nonreferrer nopener">
            <FaInstagram className="text-[#333] text-3xl  mx-2 hover:text-[#007bff] transition-colors 
             duration-300 cursor-pointer"/>
               </a>
               <a href="https://twitter.com/i/flow/login" target="_blank" rel="nonreferrer nopener">
            <FaTwitter className="text-[#333] text-3xl  mx-2 hover:text-[#007bff] transition-colors 
             duration-300 cursor-pointer"/>
               </a>
               </div>
               </div>
        </section>
    )
}
export default Home