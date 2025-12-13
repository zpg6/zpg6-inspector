import { useState } from "react";
import { Moon, Sun, Github } from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { HomePage } from "@/pages/HomePage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { githubLinks } from "@/constants";
import type { Page } from "@/types";

function App() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [currentPage, setCurrentPage] = useState<Page>("home");

    return (
        <div className="min-h-screen bg-background text-foreground">
            <button
                onClick={toggleDarkMode}
                className="fixed top-4 right-4 p-2 hover:bg-muted transition-colors"
                aria-label="Toggle theme"
            >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <div className="max-w-4xl mx-auto px-6 py-8">
                <header className="text-center mb-8">
                    <h1 className="text-5xl font-bold mb-8 tracking-tight">Zach Grimaldi</h1>

                    <nav className="flex items-center justify-center gap-4 flex-wrap">
                        <button
                            onClick={() => setCurrentPage("home")}
                            className={`px-6 py-2 border border-zinc-300 hover:bg-zinc-100 transition-colors dark:border-zinc-600 dark:hover:bg-zinc-800 ${
                                currentPage === "home" ? "bg-zinc-200 dark:bg-zinc-800" : ""
                            }`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => setCurrentPage("projects")}
                            className={`px-6 py-2 border border-zinc-300 hover:bg-zinc-100 transition-colors dark:border-zinc-600 dark:hover:bg-zinc-800 ${
                                currentPage === "projects" ? "bg-zinc-200 dark:bg-zinc-800" : ""
                            }`}
                        >
                            Projects
                        </button>
                        <a
                            href={githubLinks.profile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 border border-zinc-300 hover:bg-zinc-100 transition-colors dark:border-zinc-600 dark:hover:bg-zinc-800 inline-flex items-center gap-2"
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/zpg6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 border border-zinc-300 hover:bg-zinc-100 transition-colors dark:border-zinc-600 dark:hover:bg-zinc-800"
                        >
                            LinkedIn
                        </a>
                    </nav>
                </header>

                <hr className="border-zinc-200 dark:border-zinc-700 mb-12" />

                {currentPage === "home" ? <HomePage /> : <ProjectsPage />}
            </div>
        </div>
    );
}

export default App;
