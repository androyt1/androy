"use client";
import Home from "./components/Home";

const page = () => {
    return (
        <>
            <Home />
            <section id='about' className='min-h-screen w-full  px-10 md:px-[100px] mt-60'>
                <div>
                    <h1 className='text-orange-700 font-bold text-6xl uppercase pt-10'>About</h1>
                </div>
            </section>
            <section id='skills' className='min-h-screen w-full  px-10 md:px-[100px] mt-60'>
                <div>
                    <h1 className='text-orange-700 font-bold text-6xl uppercase pt-10'>Skills</h1>
                </div>
            </section>
        </>
    );
};

export default page;
