import React, { useState } from 'react'
import tea1 from "../assets/tea1.png"
import tea2 from "../assets/tea2.png"
import tea3 from "../assets/tea3.png"
import tea4 from "../assets/tea4.png"
import tea5 from "../assets/tea5.png"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const teaItems = [
    {
    id: "0",
    img: tea1,
    title: "Green Tea",
    desc: "A refreshing and invigorating brew, green tea is celebrated for its delicate flavor and vibrant green hue. Packed with antioxidants, it offers a smooth, grassy taste with subtle vegetal notes. Enjoy it hot or iced for a light and revitalizing experience that promotes wellness and mindfulness. ",
    },
    {
    id: "1",
    img: tea2,
    title: "Chocolate Mint",
    desc: "Indulge in the delightful fusion of rich chocolate and cool mint in this soothing herbal tea. With each sip, experience a comforting warmth complemented by the refreshing burst of mint. This blend is perfect for those seeking a sweet treat without the calories, making it an ideal after-dinner delight.",
    },
    {
    id: "2",
    img: tea3,
    title: "Orange Spice",
    desc:"Awaken your senses with this aromatic blend of bright orange zest and warm spices. The citrusy notes dance harmoniously with hints of cinnamon and clove, creating a cozy and uplifting brew. Perfect for chilly days, this tea provides a burst of flavor that warms the heart and spirit. ",
    },
    
    /** 
    {
    id: "3",
    img: tea4,
    title: "Honey Dew Bubble Tea",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat nobis harum. Porro nemo omnis aliquam inventore, in ",
    },
    {
    id: "4",
    img: tea5,
    title: "Thai Bubble tea",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat nobis harum. Porro nemo omnis aliquam inventore, in ",
    },
    */
]

const Features = () => {
    const [item, setItem] = useState(0)

    const toggleTea = (add) => {
        setItem(
            (prev) => (
                (prev+add) % teaItems.length
            )
        )
    }
    const forwardToggle =  () => {
         toggleTea(1)
    }
    const backwardToggle = () => {
        if( item ==0) {
            return
        }
        toggleTea(-1)
    }

    const num = -1*item * 100



  return (
    <div id="Features" className="py-[5rem] font-serif ">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl lg:text-5xl font-bold ">Featured <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text ">Tea Selection</span></h1>

            <div className="flex flex-col-reverse lg:flex-row justify-between items-center py-10 ">

                <div className=" flex flex-col w-1/2 items-center justify-center align-top text-center space-y-[5rem] relative ">
                    
                    <div className="flex align-top items-center justify-normal ">
                        <h1 className="text-4xl text-center align-top relative ">{teaItems[item].title}</h1>
                    </div>

                    <div className="flex">
                        <h1 className="text-lg">{teaItems[item].desc}</h1>
                        <h1 className=""></h1>
                    </div>


                </div>

                <div className="flex items-center pt-5 lg:pt-0 w-full lg:w-1/2 px-5 ">
                    < FaArrowLeft  onClick={backwardToggle}size={90} className='cursor-pointer  hover:text-green-500'/>


                    <div className="flex flex-row items-center overflow-x-hidden ">
                        {teaItems.map((curTea,index)=> (
                            <img key={index} src={curTea.img} alt="" className={` translate-x-[${num}%] duration-500`} />


                        ))}
                    </div>
                    < FaArrowRight  onClick={forwardToggle} size={90} className='cursor-pointer  hover:text-green-500'/>
                </div>


            </div>

        </div>
        
    </div>
  )
}

export default Features