const SkillsInfo = {
    "title": "My Skills",
    "description": "Here are some of the technologies I specialize in, honed through real-world projects and continuous learning.",
    "images": {
        "skill": {
            "url": "/images/skills.jpg",
            "title": "Skills",
            "alt": "Skills",
        }
    }
}

const skillsData = [
    {name: "JavaScript", level: 90},
    {name: "React", level: 85},
    {name: "TypeScript", level: 80},
    {name: "CSS / Tailwind", level: 75},
    {name: "Node.js", level: 70},
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="min-h-[500px] w-full py-16 flex flex-col justify-center items-center"
        >
            {/* Centered Heading at Top */}
            <h2 className="text-4xl font-bold mb-4 text-center max-w-6xl w-full px-8">
                {SkillsInfo?.title}
            </h2>
            <p className="mb-8 text-center md:text-left max-w-lg mx-auto md:mx-0 px-4 md:px-0">
                {SkillsInfo?.description}
            </p>

            {/* Flex container for skills and image */}
            <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-stretch gap-10 w-full">

                {/* Left: Skills List */}
                <div className="flex flex-col justify-start w-full md:w-1/2 px-4 md:px-8">
                    <div className="space-y-6 h-full flex flex-col justify-center">
                        {skillsData.map(({ name, level }) => (
                            <div key={name}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-medium">{name}</span>
                                    <span className="text-sm font-normal">{level}%</span>
                                </div>

                                {/* Wrap the bar in a div for shadow and hover effect */}
                                <div className="w-full rounded-full h-3 bg-gray-300 dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div
                                        role="progressbar"
                                        aria-valuenow={level}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        className="h-3 rounded-full bg-blue-500 dark:bg-blue-400 transition-all duration-700 transform hover:-translate-y-1"
                                        style={{ width: `${level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Right: Image with matching height */}
                <div
                    className="w-full md:w-1/2 max-w-sm rounded-lg overflow-hidden
                               shadow-md hover:shadow-lg hover:-translate-y-2 duration-300"
                >
                    <img
                        src={`${SkillsInfo?.images?.skill?.url}`}
                        alt={`${SkillsInfo?.images?.skill?.alt}`}
                        className="w-full h-full object-cover transition-transform duration-300"
                        style={{minHeight: 0}}
                    />
                </div>
            </div>
        </section>
    );
};


export default Skills;

