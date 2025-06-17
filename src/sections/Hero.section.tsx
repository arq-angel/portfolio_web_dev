import {useTheme} from "@/context/theme-provider.context";
import type {IHero} from "@/types/main.types.ts"

const HeroInfo: IHero = {
    "title": "Hi, I'm Arjun",
    "description": "Frontend Developer passionate about crafting beautiful and performant web experiences.",
    "links": [
        {
            "id": 1,
            "title": "See My Work",
            "description": "",
            "url": "projects"
        }
    ]
}

const Hero = () => {
    const {theme} = useTheme();

    const bgImage =
        theme === "dark" ? "/images/hero-dark.png" : "/images/hero-light.png";

    return (
        <section
            id="hero"
            className="relative h-[calc(100vh+80px)] -mt-20 pt-20 flex flex-col justify-center items-start px-6 transition-colors duration-500"
            style={{
                backgroundImage: `url('${bgImage}')`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay for darkening the background */}
            <div className="absolute inset-0 bg-black/10 dark:bg-black/30 pointer-events-none"/>

            {/* Content container */}
            <div className="relative max-w-2xl animate-fade-in">
                <div className="text-left p-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white">
                        {HeroInfo?.title}
                    </h1>
                    <p className="text-xl md:text-2xl mt-4 text-gray-200 max-w-3xl">
                        {HeroInfo?.description}
                    </p>
                    {HeroInfo?.links.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link?.url}`}
                            className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition"
                        >
                            {link?.title}
                        </a>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Hero;
