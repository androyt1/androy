"use client";

import React, { useState } from "react";
import FemaleDancer from "./models/FemaleDancer";
import { Canvas } from "@react-three/fiber";
import { Menu, X } from "lucide-react";

const Home = () => {
    const [active, setActive] = useState("home");
    const [showMenu, setShowMenu] = useState(false);

    const toggleShowMenu = () => {
        setShowMenu((prev) => !prev);
    };

    const handleScroll = (target) => {
        const item = window.document.getElementById(target);
        if (item) {
            item.scrollIntoView({ behavior: "smooth" });
            setActive(target);
        }
    };
    return (
        <section
            className={`w-full min-h-screen grid grid-cols-1 md:grid-cols-6  bg-transparent relative transition-transform duration-300 ease-in-out ${
                showMenu ? "px-10 md:px-[100px]" : "px-3 md:px-5"
            }`}
            id='home'>
            <div className=' md:col-span-2 flex flex-col justify-center items-center md:items-start '>
                <h3 className='text-2xl md:text-6xl text-tan font-bold mt-6 md:mt-0 text-center md:text-left'>
                    Hi,I am
                </h3>
                <h1 className='text-4xl md:text-8xl text-light font-bold uppercase tracking-tighter text-wrap mt-2 md:mt-4 text-center md:text-left'>
                    andrew
                </h1>
                <h1 className='text-4xl md:text-6xl text-tan font-bold uppercase tracking-tighter text-wrap text-center md:text-left'>
                    aghoghovwia
                </h1>
                {/* <button className='px-16 bg-transparent border-2 border-slate-300 text-slate-300 py-2 rounded-full font-semibold mt-8'>
                    Download CV
                </button> */}
            </div>
            <div className='max-h-[50vh] w-full md:max-h-full md:col-span-2'>
                <Canvas
                    className=' w-full h-full border-t-2 border-white/70 md:border-0'
                    camera={{
                        fov: 20,
                        far: 1000,
                        near: 0.1,
                        position: [-3, 1, 8],
                    }}>
                    <FemaleDancer position-y={-2.3} />
                </Canvas>
            </div>
            <div className=' md:col-span-2 flex flex-col justify-start md:justify-center items-center md:pl-4 md:items-start md:gap-y-3'>
                <h3 className='text-2xl md:text-6xl text-orange-600 font-semibold uppercase tracking-tighter text-center md:text-left'>
                    <span className='text-2xl md:text-7xl font-semibold text-light'>
                        Fullstack Developer
                    </span>
                </h3>
                <p className='text-sm md:text-xl text-tan font-normal uppercase  my-1 md:my-3  text-center md:text-left'>
                    Explore my portfolio and witness the convergence of imagination and skill.
                </p>
            </div>
            {/* left */}
            <div
                className={`fixed top-0 left-0 h-full w-[100px] bg-transparent transition-transform duration-300 ease-in-out ${
                    showMenu ? "translate-x-0" : "translate-x-[-200px]"
                }`}
                style={{ writingMode: "vertical-lr" }}>
                <button
                    className={` text-black px-1    h-[160px] fixed top-[10%] left-0 flex justify-center items-center rounded-r-2xl font-semibold ${
                        active === "home" ? "bg-tan text-secondary" : "bg-secondary text-tan"
                    }`}
                    onClick={() => handleScroll("home")}>
                    Home
                </button>
                <button
                    className={` text-black px-1    h-[160px] fixed top-[40%] left-0 flex justify-center items-center rounded-r-2xl font-semibold ${
                        active === "about" ? "bg-tan text-secondary" : "bg-secondary text-tan"
                    }`}
                    onClick={() => handleScroll("about")}>
                    About
                </button>
                <button
                    className={` text-black px-1    h-[160px] fixed top-[70%] left-0 flex justify-center items-center rounded-r-2xl font-semibold ${
                        active === "skills" ? "bg-tan text-secondary" : "bg-secondary text-tan"
                    }`}
                    onClick={() => handleScroll("skills")}>
                    Skills
                </button>
            </div>

            {/* right */}
            <div
                className={`fixed top-0 right-0 h-full w-[100px] bg-transparent transition-transform duration-300 ease-in-out ${
                    showMenu ? "translate-x-0" : "translate-x-[200px]"
                }`}
                style={{ writingMode: "vertical-lr" }}>
                <button className='bg-secondary text-tan px-1    h-[160px] fixed top-[10%] right-0 flex justify-center items-center rounded-l-2xl font-semibold'>
                    Experience
                </button>
                <button className='bg-secondary text-tan px-1    h-[160px] fixed top-[40%] right-0 flex justify-center items-center rounded-l-2xl font-semibold'>
                    Projects
                </button>
                <button className='bg-secondary text-tan shadow-sm shadow-slate-800 px-1    h-[160px] fixed top-[70%] right-0 flex justify-center items-center rounded-l-2xl font-semibold'>
                    Contact
                </button>
            </div>
            <div className='fixed top-2 right-2 z-50 cursor-pointer'>
                {showMenu ? (
                    <X size={30} color='#fff' onClick={toggleShowMenu} />
                ) : (
                    <Menu size={30} color='#fff' onClick={toggleShowMenu} />
                )}
            </div>
        </section>
    );
};

export default Home;
