import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa6";


const navBarItems = [
    "Home",
    "About",
    "Features",
    "Testimonials",
    "Get Started",
]

const Navbar = () => {
    const [navButton, setNavButton] = useState(false)

    const toggleButton = () => {
        setNavButton(!navButton)
    }

  return (
    <div className="flex justify-between text-normal font-serif text-wrap  pb-[5rem] scroll-smooth ">

        <div className="flex justify-around space-x-5 items-center cursor-pointer ">
            <img src={logo} alt="" className="w-[5rem]" />
            <h1 className="text-4xl font-medium ">TeaPort</h1>
        </div>

        <div className="flex flex-row justify-space-between relative ">
            <ul className="hidden xl:flex justify-center items-center">
               {navBarItems.map((value, index) => (
                <a href={`#${value}`} className="text-black cursor-pointer mx-5  text-2xl p-1 rounded-3xl hover:text-white hover:bg-green-300 scroll-smooth " key={index}>{value}</a>
               ))}
            </ul>
        </div>
        <div className="xl:hidden flex ">
            {navButton ?
                <button className="text-6xl" onClick={toggleButton}>{"X"}</button>
             : 
             <button className="" onClick={toggleButton}>{<FaBars size={70} />}</button>}
            
        </div>

        <div className={`absolute flex flex-col text-2xl font-medium w-full bg-neutral-900 xl:hidden justify-center pt-5 left-0 top-[-25rem]  duration-500 ${ navButton && `translate-y-[24.5rem]` } `}>
                <ul className="flex flex-col items-center text-center text-white">
                
                <button className="text-5xl" onClick={toggleButton}>{"X"}</button>

                    {navBarItems.map((value, index) => (
                        <a href={`#${value}`} className=" py-2 cursor-pointer mx-5  text-2xl p-1 rounded-3xl hover:text-black hover:bg-green-300 w-full scroll-smooth" key={index}>{value}</a>
                    ))}
                </ul>
        </div>





        

    </div>
  )
}

export default Navbar