const ServicesInfo = {
    "title": "Services",
    "description": "I offer a range of services to help you build and improve your web presence."
}

const services = [
    {
        id: "web-dev",
        title: "Web Development",
        description: "Building responsive and performant websites with modern technologies.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 16h8M8 12h8M8 8h8M3 20h18M3 4h18"/>
            </svg>
        ),
    },
    {
        id: "ui-ux",
        title: "UI/UX Design",
        description: "Crafting intuitive and engaging user interfaces and experiences.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
            </svg>
        ),
    },
    {
        id: "consulting",
        title: "Consulting",
        description: "Providing expert advice on frontend best practices and performance.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17 20h5v-2a4 4 0 00-3-3.87M12 12a4 4 0 100-8 4 4 0 000 8zm0 0v4m-5 4h10"/>
            </svg>
        ),
    },
];

const Services = () => {
    return (
        <section
            id="services"
            className="min-h-[400px] py-16 flex flex-col items-center max-w-6xl mx-auto px-6"
        >
            <h2 className="text-4xl font-bold mb-4 text-center">{ServicesInfo?.title}</h2>
            <p className="max-w-2xl text-center mb-12">
                {ServicesInfo?.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
                {services.map(({id, title, description, icon}) => (
                    <div
                        key={id}
                        className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900
                                   shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-200 ease-in-out"
                    >
                        <div className="mb-4">{icon}</div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
