import face2 from "../assets/face2.png"

import React from 'react'

const testimonialsArr = [
    {
        id: "1",
        desc: "Since I discovered this tea shipping service, my mornings have transformed! The variety keeps my tea experience fresh and exciting.",
        img: face2,
        name: "Johnanthan Jones"
    },
    {
        id: "2",
        desc: "The convenience of having high-quality teas delivered to my door has made my self-care routine so much better. I can’t imagine my life without it!",
        img: face2,
        name: "Emily Carter"
    },
    {
        id: "3",
        desc: "I love how this service has introduced me to rare teas I wouldn't find in stores. Each delivery feels like a little gift!",
        img: face2,
        name: "Michael Smith"
    },
    {
        id: "4",
        desc: "Thanks to this company, I’ve been able to explore international flavors from the comfort of my home. It’s been a delightful journey!",
        img: face2,
        name: "Sarah Lee"
    },
    {
        id: "5",
        desc: "I appreciate the curated selections tailored to my tastes. It’s like having a personal tea expert at my fingertips!",
        img: face2,
        name: "David Thompson"
    },
    {
        id: "6",
        desc: "This tea shipping service has not only made my life easier but has also deepened my love for tea. I eagerly await each delivery!",
        img: face2,
        name: "Jessica Green"
    },
    {
        id: "7",
        desc: "I’ve tried so many different blends thanks to this service. It’s opened my eyes to the world of tea!",
        img: face2,
        name: "Andrew Miller"
    },
    {
        id: "8",
        desc: "Every delivery feels like a special occasion. The excitement of trying new flavors keeps me coming back for more!",
        img: face2,
        name: "Olivia Martinez"
    },
    {
        id: "9",
        desc: "The quality of tea is exceptional! It’s hard to believe I ever settled for store-bought options.",
        img: face2,
        name: "Daniel Kim"
    },
    {
        id: "10",
        desc: "The subscription model is fantastic! I love that I can customize my orders based on what I feel like each month.",
        img: face2,
        name: "Laura Wilson"
    },
    {
        id: "11",
        desc: "This service has transformed my tea time into a delightful ritual. I look forward to every shipment!",
        img: face2,
        name: "Mark Johnson"
    },
    {
        id: "12",
        desc: "I’ve gifted subscriptions to friends and family, and they love it just as much as I do! It’s the perfect gift for tea lovers.",
        img: face2,
        name: "Samantha Brown"
    }
]


const Testimonials = () => {
  return (
    <div id="Testimonials" className='pb-10 font-serif'>

        <div className="flex flex-col justify-between items-center">
            <div className="flex justify-center items-center text-center">
                <h1 className="text-4xl  pb-[5rem]">What Are People Saying?</h1>
            </div>

            <div className="grid grid-rows-6 lg:grid-rows-4 grid-flow-col gap-4 px-5">

                {testimonialsArr.map((value, index) => (
                    <div key={index} className="text-lg font-normal border-4 p-3 rounded-3xl hover:bg-green-100 hover:border-indigo-400 hover:translate-y-2 duration-100 ">
                        <h1 className="">{value.desc}</h1>

                        <div className="flex flex-row justify-between items-center py-5">
                            <div className="flex">
                                <img src={value.img} alt="" className="w-[3rem] rounded-2xl" />
                            </div>
                            <div className="flex">
                                <h1 className="">{value.name}</h1>
                            </div>
                        </div>
                    </div>
                ))}  

            </div>

            

            


        </div>
        
    </div>
  )
}

export default Testimonials