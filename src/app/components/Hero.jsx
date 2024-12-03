'use client';

import { useMotionValue, motion, useTransform, useSpring, delay } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { heroIcons } from "../assets";


const Hero = () => {
    const [windowOffset, setWindowOffset] = useState({ innerWidth: 0, innerHeight: 0 })
    const [mouseMove, setMouseMove] = useState(false)
    const [buttonHover, setButtonHover] = useState(false)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e
        x.set(clientX)
        y.set(clientX)

        // console.log(clientX, clientY, x, y)
    }

    const handleMouseEnter = () => {
        setWindowOffset({ innerWidth: window.innerWidth, innerHeight: window.innerHeight })
        setMouseMove(true)

        console.log(innerHeight, innerWidth)
    }

    const xSping = useSpring(x, { stiffness: 100, damping: 10 })
    const ySping = useSpring(y, { stiffness: 100, damping: 10 })
    const { innerWidth, innerHeight } = windowOffset
    const rotateY = useTransform(xSping, [0, innerWidth], [-30, 30])
    const rotateX = useTransform(ySping, [0, innerHeight], [10, -50])
    return (
        <div className="h-screen grid place-items-center" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter}>
            <div>
                <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
                    <motion.div className="flex items-center justify-center" style={{ rotateX: mouseMove ? rotateX : 0, rotateY: mouseMove ? rotateY : 0, transition: '0.1s' }}>
                        <Image src={'/person.png'} alt='Person Image' width={400} height={400} priority={true} className="h-auto w-[150px]" />
                        <motion.span className="absolute text-white font-semibold text-3xl" initial={{ scale: 0 }} animate={{
                            opacity: buttonHover ? 0 : 1,
                            scale: buttonHover ? 2 : 0,
                            y: buttonHover ? -40 : 0
                        }} transition={{ opacity: { delay: 0.4 } }}>Hi</motion.span>
                    </motion.div>
                    <h1 className="text-center tracking-wider font-bold text-3xl text-gray-500 sm:text-2xl">My Name is Nahabwe Samuel & </h1>
                    <p className="text-gray-700 text-lg tracking-wider ">web developer 😜</p>
                </div>
                <div className="flex justify-center gap-x-3 text-yellow-600 mt-8 text-3xl sm:text-2xl">
                   {heroIcons.map((icon, i) => (
                        <a href="#" key={i} className="rounded-lg hover:bg-red-400 hover:text-white transition-colors">{icon}</a>
                    ))}

                </div>
                <div>
                    <a href="#" className="w-max rounded-lg bg-red-400 py-1 px-3 capitalize tracking-wider font-light block  mt-7 mx-auto hover:bg-red-500 transition-colors text-white" onMouseEnter={()=>setButtonHover(true)}
                        onMouseLeave={()=>setButtonHover(false)}   >Talk to me</a>
                </div>
            </div>
        </div>
    )
}

export default Hero