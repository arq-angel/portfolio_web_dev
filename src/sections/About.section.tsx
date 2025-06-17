const AboutInfo = {
    "images": {
        "profile": {
            "url": "/images/profile-1.jpg",
            "title": "Profile",
            "alt": "Arjun Portrait",
        }
    },
    "title": "About Me",
    "description": "I’m Arjun, a passionate frontend developer with a focus on building performant, accessible, and\n" +
        "                        beautiful web applications. I love crafting clean user interfaces and delightful user\n" +
        "                        experiences.",
    "links": {
        "resume": {
            "title": "Download Resume",
            "url": "/files/resume.pdf"
        }
    }
}

const About = () => {
    return (
        <section
            id="about"
            className="min-h-[500px] w-full py-16
                flex flex-col justify-center items-center
            "
        >
            <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center md:items-start gap-10">
                {/* Left: Image */}
                <div
                    className="flex-shrink-0 w-full md:w-1/2 max-w-sm rounded-lg overflow-hidden
                               shadow-md hover:shadow-lg hover:-translate-y-2 duration-300"
                >
                    <img
                        src={`${AboutInfo?.images?.profile?.url}`}
                        alt={`${AboutInfo?.images?.profile?.alt}`}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Right: Text and Resume Link */}
                <div className="flex flex-col justify-center w-full md:w-1/2 px-4 md:px-8">
                    <h2 className="text-4xl font-bold mb-6">
                        {AboutInfo?.title}
                    </h2>
                    <p className="mb-8 leading-relaxed">
                        {AboutInfo?.description}
                    </p>
                    <a
                        href={AboutInfo?.links?.resume?.url}
                        aria-label="Download Resume"
                        className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition w-max"
                    >
                        {AboutInfo?.links?.resume?.title}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;

