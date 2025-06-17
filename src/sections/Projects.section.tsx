import { useState } from "react";

const ProjectsInfo = {
    "title": "My Projects",
    "description": "Here are some projects I've worked on across different domains and\n" +
        "                platforms.",
}

const categories = ["All", "Web", "Mobile", "Design"];

const projectsData = [
    {
        id: "p1",
        title: "Portfolio Website",
        category: "Web",
        description: "A personal portfolio built with React and Tailwind CSS.",
        link: "#",
    },
    {
        id: "p2",
        title: "E-commerce App",
        category: "Mobile",
        description: "A cross-platform shopping app built with React Native.",
        link: "",
    },
    {
        id: "p3",
        title: "Branding Design",
        category: "Design",
        description: "Logo and branding design for a startup.",
        link: "",
    },
    {
        id: "p4",
        title: "Blog Platform",
        category: "Web",
        description: "A headless CMS blog platform with Markdown support.",
        link: "",
    },
    {
        id: "p5",
        title: "Mobile Game",
        category: "Mobile",
        description: "A 2D puzzle game for iOS and Android.",
        link: "",
    },
];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects =
        activeCategory === "All"
            ? projectsData
            : projectsData.filter((project) => project.category === activeCategory);

    return (
        <section
            id="projects"
            className="min-h-[500px] w-full px-4 py-16 flex flex-col justify-center items-center max-w-6xl mx-auto"
        >
            <h2 className="text-4xl font-bold mb-4 text-center">{ProjectsInfo?.title}</h2>
            <p className="mb-8 max-w-xl text-center ">
                {ProjectsInfo?.description}
            </p>

            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-lg font-semibold transition hover:cursor-pointer ${
                            activeCategory === category
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {filteredProjects.map(({ id, title, description, link }) => (
                    <div
                        key={id}
                        className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-900
                        shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-200 ease-in-out"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                            {title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
                        {link && (
                            <a
                                href={link}
                                className="inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Project
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
