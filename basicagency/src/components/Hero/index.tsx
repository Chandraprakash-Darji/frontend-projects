import { useRef, useState } from "react";
import { HeroCursor } from "..";
const Hero = () => {
    const hero = useRef<HTMLDivElement>(null);
    const [fullScreen, setFullScreen] = useState(false);
    return (
        <div ref={hero} className="h-screen w-full overflow-hidden relative">
            <video
                playsInline={true}
                autoPlay={true}
                muted={fullScreen ? false : true}
                loop={true}
                preload="metadata"
                src={fullScreen ? "/intro-video.mp4" : "/reel-loop.mp4"}
                className={`w-full h-full object-cover object-[center_top] ${
                    fullScreen ? "z-[100] absolute" : ""
                }`}
                onClick={() => setFullScreen(false)}
            />

            <HeroCursor
                text="Play Reel"
                subtitle="BASIC DEPTH ® 2010-2020"
                heroRef={hero}
                onClick={() => setFullScreen((p) => !p)}
            />
        </div>
    );
};

export default Hero;
