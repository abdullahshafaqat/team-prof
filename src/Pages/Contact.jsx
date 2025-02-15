import React from "react";
import Footer from "../components/Footer";
const Contact =  () =>{
    return(
      <>
              <section id="Contact" className="bg-[#f8f9fa] flex flex-col py-12 px-6 min-h-screen item-center">
              <h1 className="text-3xl font-medium text-center text-[#007bff]">Contact Me :</h1>
              <div className="flex justify-center w-full">
              <form className="bg-white w-full max-w-lg p-7 mt-10 shadow-xl rounded-lg ">
                <div className="mb-4 ">
               <label className="text-[#626262] block font-medium mb-2 ">Name :</label>
               <input type="text" placeholder="Enter your name" className=" border border-gray-500 px-5 py-3 w-full rounded-lg
                focus:outline-none focus:border-[#007bff] transition duration-300"/>
                </div>
                <div className="mb-4 ">
                <label className="text-[#626262] block font-medium mb-2">Email :</label>
               <input type="text" placeholder="Enter your email" className=" border border-gray-500 w-full px-5 py-3  rounded-lg
                focus:outline-none focus:border-[#007bff] transition duration-300"/>
                </div>
                <div className="mb-4 ">
                <label className="text-[#626262] block font-medium mb-2">Message :</label>
               <textarea type="text" placeholder="Enter your message" rows={3}  className="border border-gray-500 px-5 py-3 w-full rounded-lg
                focus:outline-none focus:border-[#007bff] transition duration-300"></textarea>
                </div>
                <div className="flex justify-center">
                <button type="Submitt" className="bg-[#626262] text-white text-xl px-4 py-2 mt-2 rounded-xl  hover:bg-[#007bff] transition-colors 
             duration-300 cursor-pointer">
                Contact Me!
                </button>
                </div>
              </form>
              </div>
              <Footer/>
</section>
</>
);
}
export default Contact;