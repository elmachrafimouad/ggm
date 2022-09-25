import {useEffect} from 'react'
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


function useScrollAnimation() {
    const controls = useAnimation();
    const [ref, inView] = useInView({trackVisibility:false});

    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
        if (!inView) {
          controls.start('hidden');
        }
    }, [controls, inView]);


    return {ref , controls}
}

export default useScrollAnimation