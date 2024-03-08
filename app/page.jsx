"use client";
import React from "react";
import FemaleDancer from "./components/models/FemaleDancer";
import { SpotLight, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const page = () => {
    return (
        <div className='w-full min-h-screen grid grid-cols-1 md:grid-cols-5 px-10 md:px-[100px]'>
            <div className='bg-black md:col-span-2 flex flex-col justify-center items-center md:items-start '>
                <h3 className='text-2xl md:text-6xl text-slate-300 font-bold mt-12 md:mt-0 text-center md:text-left'>
                    Hi,I am
                </h3>
                <h1 className='text-4xl md:text-8xl text-orange-600 font-bold uppercase tracking-tighter text-wrap mt-2 md:mt-4 text-center md:text-left'>
                    andrew
                </h1>
                <h1 className='text-2xl md:text-6xl text-slate-300 font-bold uppercase tracking-tighter text-wrap text-center md:text-left'>
                    aghoghovwia
                </h1>
                {/* <button className='px-16 bg-transparent border-2 border-slate-300 text-slate-300 py-2 rounded-full font-semibold mt-8'>
                    Download CV
                </button> */}
            </div>
            <div>
                <Canvas
                    className='  bg-black w-full h-full'
                    camera={{
                        fov: 30,
                        far: 1000,
                        near: 0.1,
                        position: [-3, 1, 8],
                    }}>
                    <SpotLight
                        position-y={2}
                        distance={10}
                        angle={0.5}
                        attenuation={5}
                        anglePower={10} // Diffuse-cone anglePower (default: 5)
                    />
                    <directionalLight position={[0, 4, 0]} intensity={2} />
                    {/* <ambientLight intensity={3.5} /> */}
                    {/* <OrbitControls /> */}
                    {/* <Laptop position={[-0.15, -1, 0]} rotation-y={Math.PI * 0.4} /> */}
                    <FemaleDancer position-y={-2.3} />
                </Canvas>
            </div>
            <div className='bg-black md:col-span-2 flex flex-col justify-center items-start md:gap-y-3'>
                <h3 className='text-4xl md:text-6xl text-orange-600 font-semibold uppercase tracking-tighter text-center md:text-left'>
                    Fullstack Developer
                </h3>
                <p className='text-sm md:text-xl text-slate-600 font-normal uppercase tracking-tighter text-wrap my-3 text-center md:text-left'>
                    Explore my portfolio and witness the convergence of imagination and skill.
                    Whether you&apos;re seeking a visually stunning design, a seamless user
                    experience, or a visionary collaboration, I&apos;m here to bring your digital
                    dreams to life
                </p>
            </div>
            <div
                className='fixed top-0 left-0 h-full w-[100px] bg-transparent '
                style={{ writingMode: "vertical-lr" }}>
                <button className='bg-orange-600 text-black px-1    h-[160px] fixed top-[10%] left-0 flex justify-center items-center rounded-r-2xl font-semibold'>
                    Home
                </button>
                <button className='bg-slate-600 text-black px-1    h-[160px] fixed top-[40%] left-0 flex justify-center items-center rounded-r-2xl font-semibold'>
                    About
                </button>
                <button className='bg-slate-600 text-black px-1    h-[160px] fixed top-[70%] left-0 flex justify-center items-center rounded-r-2xl font-semibold'>
                    Skills
                </button>
            </div>

            {/* right */}
            <div
                className='fixed top-0 right-0 h-full w-[100px] bg-transparent '
                style={{ writingMode: "vertical-lr" }}>
                <button className='bg-slate-600 text-black px-1    h-[160px] fixed top-[10%] right-0 flex justify-center items-center rounded-l-2xl font-semibold'>
                    Experience
                </button>
                <button className='bg-slate-600 text-black px-1    h-[160px] fixed top-[40%] right-0 flex justify-center items-center rounded-l-2xl font-semibold'>
                    Projects
                </button>
                <button className='bg-slate-600 text-black px-1    h-[160px] fixed top-[70%] right-0 flex justify-center items-center rounded-l-2xl font-semibold'>
                    Contact
                </button>
            </div>
        </div>
    );
};

export default page;
