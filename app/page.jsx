"use client";
import Contact from "./components/Contact";
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const page = () => {
    return (
        <div className='flex flex-col w-full min-h-screen'>
            <Home />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
};

export default page;
