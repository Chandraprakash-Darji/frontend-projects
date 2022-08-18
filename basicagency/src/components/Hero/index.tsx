import { useRef, useState } from "react";
import { HeroCursor } from "..";
const Hero = () => {
    const hero = useRef<HTMLDivElement>(null);
    const [fullScreen, setFullScreen] = useState(false);
    const [duration, setDuration] = useState("0 / 0");
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div
            ref={hero}
            className={`${
                isLoaded ? "h-screen" : "h-0"
            } w-full overflow-hidden relative`}
        >
            {fullScreen || (
                <video
                    playsInline={true}
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    preload="metadata"
                    className="w-full h-full object-cover object-[center_top]"
                    onLoadedData={() => setIsLoaded(true)}
                >
                    <source src="/reel-loop.mp4" type="video/mp4" />
                    your browser does not support the video tag
                </video>
            )}
            {fullScreen && (
                <div className="w-screen h-screen absolute top-0 left-0 z-50">
                    <video
                        playsInline={true}
                        autoPlay={true}
                        muted={false}
                        loop={true}
                        preload="metadata"
                        className="w-full h-full object-cover object-[center_top]"
                        style={{ animation: "popUp 300ms ease-in-out" }}
                        onClick={() => setFullScreen(false)}
                        onTimeUpdate={(e) => {
                            setDuration(
                                `${(
                                    (e.target as HTMLVideoElement).currentTime /
                                    100
                                ).toFixed(2)} / ${(
                                    (e.target as HTMLVideoElement).duration /
                                    100
                                ).toFixed(2)}`
                            );
                            setProgress(
                                ((e.target as HTMLVideoElement).currentTime /
                                    (e.target as HTMLVideoElement).duration) *
                                    100
                            );
                        }}
                    >
                        <source src="/intro-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="h-20 w-screen bottom-0 left-0 absolute">
                        <span
                            className="absolute transition-all text-light ease-linear w-24 flex justify-start items-center top-2"
                            style={{
                                transform: `translateX(${progress}%)`,
                            }}
                        ></span>
                    </div>
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
