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
            className={`w-full min-h-screen flex flex-col lg:flex-row bg-transparent overflow-hidden relative transition-transform duration-300 ease-in-out px-3 lg:px-[100px] ${
                showMenu ? "" : ""
            }`}
            id='home'>
            <div className='h-[25vh] lg:min-h-screen lg:w-1/3 flex flex-col justify-center items-center lg:items-start '>
                <h3 className='text-2xl lg:text-4xl text-slate-100 font-normal mt-6 lg:mt-0 text-center lg:text-left'>
                    Hi,I am
                </h3>
                <h1 className='text-4xl lg:text-8xl text-textbrown font-bold uppercase tracking-tighter text-wrap mt-2 lg:mt-4 text-center lg:text-left'>
                    andrew
                </h1>
                <h1 className='text-4xl lg:text-4xl text-slate-200 font-bold uppercase tracking-tighter text-wrap text-center lg:text-left'>
                    aghoghovwia
                </h1>
                {/* <button className='px-16 bg-transparent border-2 border-slate-300 text-slate-300 py-2 rounded-full font-semibold mt-8'>
                    Download CV
                </button> */}
            </div>
            <div className='h-[50vh] lg:min-h-screen w-full lg:max-h-full lg:w-1/3 bg-[#181312]'>
                <Canvas
                    className=' w-full h-full border-t-2 border-white/70 lg:border-0'
                    camera={{
                        fov: 20,
                        far: 1000,
                        near: 0.1,
                        position: [-3, 1, 8],
                    }}>
                    <FemaleDancer position-y={-2.3} />
                </Canvas>
            </div>
            <div className='h-[25vh] lg:min-h-screen lg:w-1/3 flex flex-col justify-start lg:justify-center items-center lg:pl-2 lg:items-start lg:gap-y-3 '>
                <h3 className='text-2xl lg:text-5xl text-textbrown font-bold tracking-tighter md:tracking-wider text-center uppercase lg:text-left'>
                    Fullstack Developer
                </h3>
                <p className='text-sm lg:text-xl text-slate-400 font-normal lg:max-w-[90%]  my-1 lg:my-3  text-center lg:text-left'>
                    Explore my portfolio and witness the convergence of imagination and skill
                </p>
            </div>
            {/* left */}
            <div
                className={`fixed top-0 left-0 h-full w-[100px] bg-transparent transition-transform duration-300 ease-in-out ${
                    showMenu ? "translate-x-0" : "translate-x-[-200px]"
                }`}
                style={{ writingMode: "vertical-lr" }}>
                <button
                    className={` text-black px-1 font-normal  h-[160px] fixed  shadow top-[10%] left-0 flex justify-center items-center rounded-r-2xl text-sm ${
                        active === "home"
                            ? "bg-darkshirt text-white "
                            : "bg-darkshirt/50 text-white/50 "
                    }`}
                    onClick={() => handleScroll("home")}>
                    Home
                </button>
                <button
                    className={` text-black px-1 font-normal  h-[160px] fixed  shadow top-[40%] left-0 flex justify-center items-center rounded-r-2xl text-sm ${
                        active === "about"
                            ? "bg-darkshirt text-white "
                            : "bg-darkshirt/50 text-white/50 "
                    }`}
                    onClick={() => handleScroll("about")}>
                    About
                </button>
                <button
                    className={` text-black px-1 font-normal  h-[160px] fixed  shadow top-[70%] left-0 flex justify-center items-center rounded-r-2xl text-sm ${
                        active === "skills"
                            ? "bg-darkshirt text-white "
                            : "bg-darkshirt/50 text-white/50 "
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
                <button
                    className={` text-black px-1 font-normal  h-[160px] fixed  shadow top-[10%] right-0 flex justify-center items-center rounded-r-2xl text-sm ${
                        active === "experience"
                            ? "bg-darkshirt text-white "
                            : "bg-darkshirt/50 text-white/50 "
                    }`}
                    onClick={() => handleScroll("experience")}>
                    Experience
                </button>
                <button
                    className={` text-black px-1 font-normal  h-[160px] fixed  shadow top-[40%] right-0 flex justify-center items-center rounded-r-2xl text-sm ${
                        active === "projects"
                            ? "bg-darkshirt text-white "
                            : "bg-darkshirt/50 text-white/50 "
                    }`}
                    onClick={() => handleScroll("projects")}>
                    Projects
                </button>
                <button
                    className={` text-black px-1 font-normal  h-[160px] fixed  shadow top-[70%] right-0 flex justify-center items-center rounded-r-2xl text-sm ${
                        active === "contact"
                            ? "bg-darkshirt text-white "
                            : "bg-darkshirt/50 text-white/50 "
                    }`}
                    onClick={() => handleScroll("contact")}>
                    Contact
                </button>
            </div>
            <div className='fixed top-2 right-2 z-50 cursor-pointer text-textbrown'>
                {showMenu ? (
                    <X size={30} onClick={toggleShowMenu} />
                ) : (
                    <Menu size={30} onClick={toggleShowMenu} />
                )}
            </div>
        </section>
    );
};

export default Home;
