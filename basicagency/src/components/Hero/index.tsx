import { useRef, useState } from "react";
import { HeroCursor } from "..";
const Hero = () => {
    const hero = useRef<HTMLDivElement>(null);
    const [fullScreen, setFullScreen] = useState(false);
    return (
        <div ref={hero} className="h-screen w-full overflow-hidden relative">
            {fullScreen || (
                <video
                    playsInline={true}
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    preload="metadata"
                    className="w-full h-full object-cover object-[center_top]"
                >
                    <source src="/reel-loop.mp4" type="video/mp4" />
                    your browser does not support the video tag
                </video>
            )}
            {fullScreen && (
                <div className="w-screen h-screen fixed top-0 left-0 z-50">
                    <video
                        playsInline={true}
                        autoPlay={true}
                        muted={false}
                        loop={true}
                        preload="metadata"
                        className="w-full h-full object-cover object-[center_top]"
                        style={{ animation: "popUp 300ms ease-in-out" }}
                        onClick={() => setFullScreen(false)}
                        onPlaying={(e)=>console.log(e)}
                    >
                        <source src="/intro-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}

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
