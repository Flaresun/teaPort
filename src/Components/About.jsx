import React from 'react'
import face1 from "../assets/face1.png"
import face2 from "../assets/face2.png"
import face3 from "../assets/face3.png"

const About = () => {
  return (
    <div id="About">
        <div className="flex flex-col justify-between items-center font-serif">
            <div className="flex flex-col justify-center items-center text-5xl pt-[5rem] pb-5 font-semibold px-3 lg:px-[10rem] text-center">
                <h1 className="">Delivering  <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">Tea</span> since 2010</h1>
                <p className="text-[30] text-lg text-slate-500 pt-5">
                Since 2010, we have been on a mission to bring the world of tea directly to your doorstep. Our passion for exceptional flavors and unique blends drives us to curate a selection 
                that caters to both traditionalists and adventurers alike. From the soothing notes of chamomile to the bold richness of Assam, each cup tells a story steeped in history and culture.


                </p>
            </div>

            <div className="flex-col lg:flex-row flex  justify-center items-center py-5 space-x-5 text-center" >

                <div className="flex flex-col w-full lg:w-1/3 h-full justify-start items-center  space-y-5">
                    <img src={face1} alt="" className=" " />
                    <h1 className="text-4xl font-medium italic ">
                        John Smith
                    </h1>

                    <h1 className="text-2xl font-normal italic ">
                    John Smith has been instrumental in the development and success of our tea shipping company.
                    </h1>
                </div>

                <div className="flex flex-col w-full lg:w-1/3 h-full justify-content items-center space-y-5">
                    <img src={face1} alt="" className="items-" />
                    <h1 className="text-4xl font-medium italic">
                        Jacob Tao
                    </h1>
                    <h1 className="text-2xl font-normal italic ">
                    Jacob Tao’s expertise has played a crucial role in building our tea shipping company from the ground up. 
                    </h1>
                </div>

                <div className="flex flex-col w-full lg:w-1/3 h-full justify-content m-auto p-auto tems-center space-y-5">
                    <img src={face1} alt="" className="" />
                    <h1 className="text-4xl font-medium italic">
                        Jean Louis
                    </h1>
                    <h1 className="text-2xl font-normal italic ">
                    Jean Louis has significantly shaped our company’s vision and direction in the tea shipping sector.
                    </h1>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default About