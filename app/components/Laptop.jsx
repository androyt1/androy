import { useGLTF } from "@react-three/drei";
import { useAnimations } from "@react-three/drei";
import { useEffect } from "react";

const Laptop = (props) => {
    const model = useGLTF("/models/laptop.glb");
    const animations = useAnimations(model.animations, model.scene);

    useEffect(() => {
        animations.actions["Armature|ArmatureAction"].play();
    }, [animations.actions]);

    return <primitive object={model.scene} {...props} />;
};

export default Laptop;
