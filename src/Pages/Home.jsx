import React from "react";

const Home =  ( )=>{
    return(
        <section className="bg-[#f8f9fa] text-center items-center justify-center flex  flex-col h-screen">
            <img src="\Images\personimg1.png" alt="personimag" className=" w-32 h-36  border-[#007bff] rounded-full"/>
            <h1 className="text-[#333] text-5xl font-medium">Hi, I'm Abdullah.</h1>
            <h2 className="text-[#555] text-2xl mt-2"> I'm a Frontend Developer</h2>
            <p className="text-[#555] text-xl mt-2 max-w-2xl">I am a passionate Front-End
             Developer dedicated to crafting beautiful, user-friendly web experiences with a
             keen eye for design and a strong foundation in modern web technologies.</p>
             <button className="text-white text-xl bg-[#007bff] px-5 py-2 mt-4 rounded-lg transition-all 
             duration-300 ease-in-out hover:bg-blue-600 cursor-pointer">Hire Me</button>
        </section>
    )
}
export default Home;