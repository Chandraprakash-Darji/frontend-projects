import HeadLogo from "../../Icons/HeadLogo";

const navList = [
    {
        name: "Work",
        href: "#",
    },
    {
        name: "About",
        href: "#",
    },
    {
        name: "News",
        href: "#",
    },
    {
        name: "Thinking",
        href: "#",
    },
    {
        name: "Pledge",
        href: "#",
    },
    {
        name: "Careers",
        href: "#",
    },
    {
        name: "Contact",
        href: "#",
    },
];

const Nav = () => {
    return (
        <header className="flex justify-between items-center p-12 absolute top-0 w-full text-light dark:text-primary z-50">
            <a href="#" className="w-56 h-8 lg:w-48 flex">
                <HeadLogo />
            </a>
            <nav className="flex gap-[3vw] text-sm  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 tracking-wide uppercase">
                {navList.map(({ name, href }) => {
                    return (
                        <div
                            key={name}
                            className="relative after:h-[2px] after:bg-light after:dark:bg-primary after:absolute after:right-0 after:bottom-0 after:w-0 hover:after:w-full after:transition-all after:duration-200 hover:after:left-0 hover:after:right-auto "
                        >
                            <a href={href}>{name}</a>
                        </div>
                    );
                })}
            </nav>
            <div>
                <button className="group px-1 w-[3rem] flex justify-center items-center">
                    <div className="flex gap-1 group-hover:gap-2 transition-all duration-300 ">
                        <span className="w-2 block aspect-square rounded-full bg-light dark:bg-primary" />
                        <span className="w-2 block aspect-square rounded-full bg-light dark:bg-primary" />
                        <span className="w-2 block aspect-square rounded-full bg-light dark:bg-primary" />
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Nav;
