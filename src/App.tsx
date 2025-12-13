import { Moon, Sun, Github, ExternalLink } from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";

const githubLinks = {
  profile: "https://github.com/zpg6",
  repo: "https://github.com/zpg6/zpg6-inspector"
} as const;

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

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
            <button className="px-6 py-2 border border-zinc-600 hover:bg-zinc-800 transition-colors">
              Home
            </button>
            <button className="px-6 py-2 border border-zinc-600 hover:bg-zinc-800 transition-colors">
              Projects
            </button>
            <a 
              href={githubLinks.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-zinc-600 hover:bg-zinc-800 transition-colors inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/zachgrimaldi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-zinc-600 hover:bg-zinc-800 transition-colors"
            >
              LinkedIn
            </a>
          </nav>
        </header>

        <hr className="border-zinc-700 mb-12" />

        <main className="space-y-12">
          <section>
            <h2 className="text-4xl font-bold mb-6">Hello World! 👋</h2>
          </section>

          <section>
            <h3 className="text-3xl font-bold mb-4">About me</h3>
            <p className="text-lg leading-relaxed">
              I'm a software engineer with a Computer Science degree from University of Pittsburgh.
              I've been working in the automotive industry for the past 5 years.
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-bold mb-4">About the site</h3>
            
            <p className="text-lg leading-relaxed mb-4">
              Written in <span className="text-cyan-400">React</span> ⚛️ with <span className="text-cyan-400">TypeScript</span> using Vite ⚡, styled with Tailwind CSS 🎨, and deployed to{" "}
              <span className="text-orange-400">Cloudflare Pages</span> 🔶 (globally distributed edge network).
            </p>

            <ul className="space-y-3 text-lg">
              <li className="flex items-start gap-2">
                <span className="text-zinc-400 mt-1">•</span>
                <span>
                  Leverages Vite's lightning-fast HMR and optimized build process for instant development feedback and production-ready bundles.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zinc-400 mt-1">•</span>
                <span>
                  Tailwind CSS provides utility-first styling with minimal bundle size, while shadcn/ui components offer accessible, customizable primitives.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zinc-400 mt-1">•</span>
                <span>
                  Cloudflare Pages serves static assets from 275+ global edge locations with automatic HTTPS, Git integration, and preview deployments.
                </span>
              </li>
            </ul>
          </section>

          <section className="pb-8">
            <p className="text-lg text-zinc-400">
              The source code is available on{" "}
              <a 
                href={githubLinks.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
              >
                <Github className="w-5 h-5" />
                <span className="underline decoration-cyan-400/30 group-hover:decoration-cyan-300">GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
