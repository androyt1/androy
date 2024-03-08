"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, SpotLight } from "@react-three/drei";
import Laptop from "./Laptop";
import FemaleDancer from "./models/FemaleDancer";

const Background = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-full z-0'>
            <Canvas
                className='border-4 border-slate-700  bg-black'
                camera={{
                    fov: 30,
                    far: 1000,
                    near: 0.1,
                    position: [-3, 1, 8],
                }}>
                <SpotLight
                    position-y={2}
                    distance={10}
                    angle={0.65}
                    attenuation={5}
                    anglePower={5} // Diffuse-cone anglePower (default: 5)
                />
                <directionalLight position={[0, 4, 0]} intensity={2} />
                {/* <ambientLight intensity={3.5} /> */}
                <OrbitControls />
                {/* <Laptop position={[-0.15, -1, 0]} rotation-y={Math.PI * 0.4} /> */}
                <FemaleDancer position-y={-2.3} />
            </Canvas>
        </div>
    );
};

export default Background;
