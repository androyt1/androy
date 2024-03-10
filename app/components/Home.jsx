"use client";

import React, { useState } from "react";

import { Menu, X } from "lucide-react";
import Background from "./Background";

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
            className={`w-full h-screen relative bg-slate-950  ${showMenu ? "" : ""}`}
            id='home'>
            <Background />
            <div className='absolute top-0 left-0 h-full w-full bg-transparent flex flex-col md:flex-row px-3 md:px-[100px] '>
                <div className='flex-1 flex flex-col justify-center items-start '>
                    <h4 className='text-xl md:text-4xl text-slate-300 mt-12 md:mt-0'>
                        Hi I&apos;m
                    </h4>
                    <h1 className='text-4xl md:text-6xl uppercase text-[#A08275] font-bold mt-2 md:mt-4'>
                        Aghoghovwia Andrew
                    </h1>
                    <p className='text-xl md:text-2xl font-normal text-slate-300 mt-3 md:mt-6'>
                        Frontend Developer with{" "}
                        <span className='text-2xl md:text-3xl font-semibold'>7+ years</span> of
                        Experience
                    </p>
                </div>
                <div className='flex-1'></div>
                <div className='flex-1 flex flex-col justify-center items-start backdrop-blur-sm'>
                    <h2 className='text-xl md:text-3xl font-normal text-white uppercase'>
                        Transforming Ideas into Digital Experiences
                    </h2>
                    <p className='text-xl text-slate-400 mt-3 md:mt-6'>
                        Crafting Seamless User Journeys with Code and Creativity
                    </p>

                    <button className='px-12 py-2 md:px-16 md:py-3 border border-[#A08275] bg-transparent  text-[#A08275] rounded-full my-4 md:my-8'>
                        Explore My Work
                    </button>
                </div>
            </div>

            <div
                className={`fixed top-0 left-0 h-full w-[100px] bg-transparent transition-transform duration-300 ease-in-out ${
                    showMenu ? "translate-x-0" : "translate-x-[-200px]"
                }`}
                style={{ writingMode: "vertical-lr" }}>
                <button
                    className={` text-black px-2 font-normal  h-[160px] fixed  shadow top-[10%] left-0 flex justify-center items-center rounded-r-2xl text-sm ${
                        active === "home"
                            ? "bg-darkshirt text-white "
                            : "bg-darkshirt/50 text-white/50 "
                    }`}
                    onClick={() => handleScroll("home")}>
                    Home
                </button>
                <button
                    className={` text-black px-2 font-normal  h-[160px] fixed  shadow top-[40%] left-0 flex justify-center items-center rounded-r-2xl text-sm ${
                        active === "about"
                            ? "bg-darkshirt text-white "
                            : "bg-darkshirt/50 text-white/50 "
                    }`}
                    onClick={() => handleScroll("about")}>
                    About
                </button>
                <button
                    className={` text-black px-2 font-normal  h-[160px] fixed  shadow top-[70%] left-0 flex justify-center items-center rounded-r-2xl text-sm ${
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
                    className={` text-black px-2 font-normal  h-[160px] fixed  shadow top-[10%] right-0 flex justify-center items-center rounded-r-2xl text-sm ${
                        active === "experience"
                            ? "bg-darkshirt text-white "
                            : "bg-darkshirt/50 text-white/50 "
                    }`}
                    onClick={() => handleScroll("experience")}>
                    Experience
                </button>
                <button
                    className={` text-black px-2 font-normal  h-[160px] fixed  shadow top-[40%] right-0 flex justify-center items-center rounded-r-2xl text-sm ${
                        active === "projects"
                            ? "bg-darkshirt text-white "
                            : "bg-darkshirt/50 text-white/50 "
                    }`}
                    onClick={() => handleScroll("projects")}>
                    Projects
                </button>
                <button
                    className={` text-black px-2 font-normal  h-[160px] fixed  shadow top-[70%] right-0 flex justify-center items-center rounded-r-2xl text-sm ${
                        active === "contact"
                            ? "bg-darkshirt text-white "
                            : "bg-darkshirt/50 text-white/50 "
                    }`}
                    onClick={() => handleScroll("contact")}>
                    Contact
                </button>
            </div>
            <div className='fixed top-2 right-2 z-50 cursor-pointer text-white'>
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
