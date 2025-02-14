import React from "react";
const Projects = () =>{
    return(
<section id="Projects" className="py-12 px-6 bg-[#f8f9fa] min-h-screen">
    <h1 className="text-[#333] text-3xl font-medium text-center mb-8">My Projects</h1>
    <div className="flex flex-col md:flex-row gap-7 justify-center items-center">
    <div className="w-80 md:w-95 bg-white shadow-xl rounded-lg p-4 cursor-pointer  transform transition duration-700 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-[#007bff] font-semibold text-xl">
        <a href="https://soul-enryption.vercel.app/" target="_blank" rel="nonreferrer nopener">Soul encryption</a>
        </h2>
        <img src="\Images\soulimg.jpg" alt="soulimg"/>
        <p className="mt-2 text-[#555]">Leave your loved ones with the tools they need to manage your
         end-of-life affairs, by securing your important documents, accounts, and memories.</p>
    </div>
    <div className="w-80 md:w-95 bg-white shadow-xl rounded-lg p-3.5 cursor-pointer transform transition duration-700 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-[#007bff] font-semibold text-xl"> <a href="https://virtual-university-website.vercel.app/" target="_blank" rel="nonreferrer nopener">Virtual university</a></h2>
        <img src="\Images\educationimg.jpg" alt="educationimg" className="h-60"/>
        <p className="mt-1 text-[#555]">Virtual University of Pakistan is the Pakistan's first
        University based completely on modern Information and provide extremely affordable world 
        class education</p>
    </div>
    </div>









</section> 
);
}
export default Projects;