import {ThemeProvider} from "@/context/theme-provider.context.tsx"
import RootLayout from "@/components/Layout.component.tsx";
import Hero from "@/sections/Hero.section.tsx";
import About from "@/sections/About.section.tsx";
import Skills from "@/sections/Skills.section.tsx";
import Experience from "@/sections/Experience.section.tsx";
import Services from "@/sections/Services.section.tsx";
import Testimonials from "@/sections/Testimonials.section.tsx";
import Contact from "@/sections/Contact.section.tsx";
import Projects from "@/sections/Projects.section.tsx";
import {Toaster} from "react-hot-toast";

function App() {

    return (
        <>
            <Toaster position="top-right"/>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <RootLayout>
                    <Hero/>
                    <About/>
                    <Skills/>
                    <Experience/>
                    <Projects/>
                    <Services/>
                    <Testimonials/>
                    <Contact/>
                </RootLayout>
            </ThemeProvider>
        </>
    )
}

export default App
