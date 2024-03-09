import { useGLTF, useAnimations, SpotLight } from "@react-three/drei";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const FemaleDancer = (props) => {
    const model = useGLTF("/models/female.glb");
    const animations = useAnimations(model.animations, model.scene);
    const spotLightRef = useRef();

    useFrame((state, _) => {
        spotLightRef.current.position.x += Math.sin(state.clock.elapsedTime) * 0.01;
        spotLightRef.current.position.x = Math.max(
            -0.6,
            Math.min(0.6, spotLightRef.current.position.x)
        );
    });

    useEffect(() => {
        animations.actions["Female_Dance"].play();
    }, [animations.actions]);

    return (
        <mesh>
            <SpotLight
                ref={spotLightRef}
                position-y={1.4}
                distance={12}
                angle={0.5}
                attenuation={4}
                anglePower={10} // Diffuse-cone anglePower (default: 5)
            />
            <directionalLight position={[0, 4, 0]} intensity={2} />
            <primitive object={model.scene} {...props} position-y={-1.5} />
        </mesh>
    );
};

export default FemaleDancer;
