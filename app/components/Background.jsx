import React from "react";
import { Canvas } from "@react-three/fiber";
import FemaleDancer from "./models/FemaleDancer";

const Background = () => {
    return (
        <div className='h-screen w-full  absolute top-0 left-0 bottom-0'>
            <Canvas
                className=' w-full h-full '
                camera={{
                    fov: 20,
                    far: 1000,
                    near: 0.1,
                    position: [-3, 1, 8],
                }}>
                <FemaleDancer position-y={-2.3} />
            </Canvas>
        </div>
    );
};

export default Background;
