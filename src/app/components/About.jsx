'use client'

import Image from "next/image"
import Heading from "./sub/Heading"
import Archievements from "./sub/Archievements"
import { aboutData, aboutText, arrowLeftIcon, downloadIcon } from "../assets"

const About = () => {
    return (
        <div id="about" className="min-h-screen  flex flex-col items-center justify-center ">
            <Heading text='About me' />
            <div className="w-full flex items-center justify-between md:justify-center">
                <Image src={'/about-me.png'} width={400} height={400} alt="Person Image" className="w-[300px] lg:w-[200px] md:hidden" />

                <div className="relative max-w-[800px] rounded-xl bg-zinc-100 p-5 text-justify dark:bg-zinc-700 transition-colors">
                    <span className="absolute -left-4 top-20 scale-[2.5] text-zinc-100 md:hidden dark:bg-zinc-00 transition-colors">{arrowLeftIcon}</span>
                    <p className="text-lg font-light text-gray-700 first-letter:pl-3 lg-text-[16px] dark:text-white">{aboutText}</p>
                    <a href="/cv.pdf" download='' className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors">
                        <span>Download CV</span>
                        <span className="text-xl">{downloadIcon}</span>
                    </a>
                </div>
            </div>

            <div className="mt-20 w-full flex items-center justify-between gap-x-7 gap-y-10">
                {aboutData.map((item, i) => (
                    <Archievements key={item.title} title={item.title} amount={item.amount}>
                        {item.icon}
                        </Archievements>


                ))}
            </div>
        </div>
    )
}

export default About