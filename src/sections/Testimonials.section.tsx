const TestimonialsInfo = {
    "title": "Testimonials",
    "description": "Hear what some of my clients and colleagues have to say about working with me.",
}

const testimonials = [
    {
        id: "1",
        quote: "Jarvis delivered an amazing frontend solution that boosted our site’s performance and user engagement.",
        author: "Alice Johnson",
        role: "Product Manager at Awesome Tech Co.",
    },
    {
        id: "2",
        quote: "Professional, creative, and efficient. Working with Jarvis was a great experience.",
        author: "Mark Stevens",
        role: "CTO at Creative Solutions",
    },
    {
        id: "3",
        quote: "The UI/UX improvements Jarvis made really enhanced our product’s usability.",
        author: "Sarah Lee",
        role: "Founder of Startup Hub",
    },
];

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="min-h-[400px] py-16 px-6 max-w-6xl mx-auto flex flex-col items-center"
        >
            <h2 className="text-4xl font-bold mb-4 text-center">{TestimonialsInfo?.title}</h2>
            <p className="max-w-2xl text-center mb-12">
                {TestimonialsInfo?.description}
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {testimonials.map(({id, quote, author, role}) => (
                    <div
                        key={id}
                        className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg p-6
                        shadow-md hover:-translate-y-2 hover:shadow-xl transition duration-200 ease-in-out
                        flex flex-col justify-between"
                    >
                        <p className="text-gray-700 dark:text-gray-300 italic mb-6">“{quote}”</p>
                        <div>
                            <p className="font-semibold text-gray-900 dark:text-white">{author}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
