import React, { useState } from 'react'
import teaHero from "../assets/teaHero.png"

const Hero = () => {
    const varietyCount = 2000
    const countryCount = 30
    const yearCount = 10

  return (
    <div>
        <div id="value" className="flex flex-col xl:flex-row justify-between items-center font-serif">
            <div className="flex flex-col items-start">
                <div className=""></div>    

                <div className="flex flex-col space-y-10 text-center">
                    <h1 className="text-5xl lg:text-7xl font-normal">Choose The <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">Flavor,</span></h1>
                    <h1 className="text-5xl lg:text-7xl font-normal ">Delivered The  <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">Taste</span></h1>

                </div>
                <div className="flex pt-10 justify-center w-full items-center">
                    <button className="text-3xl bg-gradient-to-r from-green-500 to-green-800 p-4 rounded-2xl hover:opacity-70">Get Started</button>
                </div>

            </div>

            <div className="flex xl:h-full">
                <img src={teaHero} alt="" className="w-[40rem] " />
            </div>  

        </div>


        <div className="flex flex-col  xl:flex-row justify-between items-center text-4xl  py-6">
            <div  className="flex flex-row"><div id="varietyCount" className="pb-2 xl:pb-0 font-medium italic">{varietyCount}</div>{`+`} Tea Variety</div>
            <div className="flex flex-row"><div id="countryCount" className="pb-2 xl:pb-0 font-medium italic">{countryCount}</div>{`+`} Countries</div>
            <div className="flex flex-row"><div id="yearCount" className="pb-2 xl:pb-0 font-medium italic">{yearCount}</div>{`+`} Years of Business</div>


        </div>
    </div>
  )
}

export default Hero