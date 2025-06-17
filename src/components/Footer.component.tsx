const FooterInfo = {
    "name": "Arjun Thapa",
    "text": "All rights reserved.",
    "links": [
        {
            "id": 1,
            "title": "GitHub",
            "url": "https://github.com/arq-angel",
        },
        {
            "id": 2,
            "title": "LinkedIn",
            "url": "https://www.linkedin.com/in/arjun-thapa/",
        },
        {
            "id": 3,
            "title": "Email",
            "url": "mailto:obstinate2058@gmail.com",
        }
    ]
}

const Footer = () => {
    return (
        <footer className="w-full py-8 px-6 text-center border-t border-gray-300 dark:border-gray-700">
            <p className="text-lg font-semibold">
                © {new Date().getFullYear()} {`${FooterInfo?.name}. ${FooterInfo?.text}`}
            </p>

            <div className="mt-4 flex justify-center gap-4">
                {FooterInfo?.links?.map((link) => (
                    <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                        {link.title}
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
