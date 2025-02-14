import React from "react";
const Navbar = () =>{
    return(
<nav className=" bg-[#f8f9fa] flex justify-between items-center py-4 px-4">
    <h1 className=" text-2xl md:text-3xl font-medium text-[#333]">Abdullah</h1>
    <ul className="text-[#333] flex  space-x-6 md:space-x-12 mr-5 ml-6 sm:ml-12 text-sm md:text-xl ">
       <li href="#Projects" className="cursor-pointer text-xl hover:text-[#007bff] transition-colors duration-200 hover:underline ">Home</li>
       <li href="#" className="cursor-pointer text-xl hover:text-[#007bff] transition-colors duration-200 hover:underline ">Projects</li>
       <li href="#" className="cursor-pointer text-xl hover:text-[#007bff] transition-colors duration-200 hover:underline ">Contact</li>
    </ul>
</nav>
    );
}
export default Navbar;