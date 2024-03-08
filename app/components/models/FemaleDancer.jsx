import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";

const FemaleDancer = (props) => {
    const model = useGLTF("/models/female.glb");
    const animations = useAnimations(model.animations, model.scene);

    useEffect(() => {
        animations.actions["Female_Dance"].play();
    }, [animations.actions]);

    return <primitive object={model.scene} {...props} />;
};

export default FemaleDancer;
