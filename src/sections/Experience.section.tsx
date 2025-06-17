const ExperienceInfo = {
    "title": "Experience",
    description: "A summary of my roles developing web applications with a focus on performance, accessibility, and user experience."
}

const experiences = [
    {
        id: "1",
        role: "Frontend Developer",
        company: "Awesome Tech Co.",
        period: "Jan 2023 - Present",
        description: "Building performant and accessible React applications with a focus on UX.",
    },
    {
        id: "2",
        role: "Junior Web Developer",
        company: "Creative Solutions",
        period: "Jun 2021 - Dec 2022",
        description: "Developed responsive websites and improved performance for client projects.",
    },
    {
        id: "3",
        role: "Intern Developer",
        company: "Startup Hub",
        period: "Jan 2021 - May 2021",
        description: "Assisted in building MVPs and gaining practical experience in web development.",
    },
    {
        id: "4",
        role: "Web Developer",
        company: "Planet Hub",
        period: "Jan 2021 - May 2021",
        description: "Assisted in building MVPs and gaining practical experience in web development.",
    },
];

const Experience = () => {
    return (
        <section
            id="experience"
            className="min-h-[500px] w-full px-4 py-16 max-w-6xl mx-auto flex flex-col justify-center items-center"
        >
            <h2 className="text-4xl font-bold mb-4 text-center max-w-6xl w-full px-8">
                {ExperienceInfo?.title}
            </h2>
            <p className="mb-8 text-center md:text-left max-w-lg mx-auto md:mx-0 px-4 md:px-0">
                {ExperienceInfo?.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experiences.map(({id, role, company, period, description}) => (
                    <div
                        key={id}
                        className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900
                                   shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-200 ease-in-out"
                    >
                        <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                            {role}
                        </h3>
                        <p className="text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                            {company}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm italic mb-3 opacity-75">{period}</p>
                        <p className="text-gray-700 dark:text-gray-300">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};


export default Experience;
