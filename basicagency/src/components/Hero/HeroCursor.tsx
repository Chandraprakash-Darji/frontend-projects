import { useEffect, useRef, useState } from "react";

interface Props {
    text: string;
    subtitle: string;
    dragable?: boolean;
    heroRef: React.RefObject<HTMLDivElement>;
    onClick: () => void;
}

const HeroCursor = ({ text, subtitle, heroRef, onClick }: Props) => {
    const [positon, setPositon] = useState({ left: "50%", top: "50%" });
    const [cursorShow, setCursorShow] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);

    const mouseMove = (e: MouseEvent) => {
        setCursorShow(true);
        setPositon({ top: `${e.pageY}px`, left: `${e.pageX}px` });
    };

    const mouseLeave = () => {
        setCursorShow(false);
        setPositon({ left: "50%", top: "50%" });
    };

    useEffect(() => {
        heroRef.current?.addEventListener("mousemove", mouseMove);
        heroRef.current?.addEventListener("mouseleave", mouseLeave);

        return () => {
            heroRef.current?.removeEventListener("mousemove", mouseMove);
            heroRef.current?.removeEventListener("mouseleave", mouseLeave);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`absolute z-10 -translate-x-1/2 -translate-y-[40%] w-32 flex justify-center items-center flex-col text-center gap-4 font-bold text-sm cursor-none uppercase ${cursorShow?"":"transition-all duration-300"} select-none`}
            style={{
                top: positon.top,
                left: positon.left,
            }}
            onClick={onClick}
        >
            <div className="w-28 aspect-square bg-light rounded-full flex justify-center items-center relative group overflow-hidden">
                <span className="w-10 absolute group-hover:top-[0%] group-hover:opacity-0 transition-all duration-500 delay-75 top-1/2 -translate-y-1/2 ">
                    {text}
                </span>
                <span className="w-10 absolute group-hover:top-1/2 group-hover:opacity-100 opacity-0 transition-all duration-500 delay-75 top-[70%] -translate-y-1/2">
                    {text}
                </span>
            </div>
            <div>{subtitle}</div>
        </div>
    );
};

export default HeroCursor;
