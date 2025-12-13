import { useState } from "react";
import { Moon, Sun, Github, ExternalLink, ArrowRight, Package, Wrench } from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";

const githubLinks = {
  profile: "https://github.com/zpg6",
  repo: "https://github.com/zpg6/zpg6-inspector"
} as const;

type Page = "home" | "projects";

type PackageType = "npm" | "pypi" | "crates";

interface PackageLink {
  type: PackageType;
  url: string;
  name: string;
}

interface Project {
  name: string;
  githubUrl: string;
  description: string;
  packages?: PackageLink[];
  demos?: Array<{ url: string; text: string }>;
  relatedLinks?: Array<{ url: string; text: string }>;
  why?: string;
}

interface InProgressProject {
  name: string;
  githubUrl: string;
  description: string;
  why?: string;
}

const publishedProjects: Project[] = [
  {
    name: "better-auth-cloudflare",
    githubUrl: "https://github.com/zpg6/better-auth-cloudflare",
    description: "A Cloudflare adapter for Better Auth, the comprehensive TypeScript authentication framework. Seamlessly integrates Better Auth's features (email/password, social providers, 2FA, passkeys, anonymous auth) with Cloudflare's edge infrastructure. Adds native support for Workers runtime, D1 database, KV storage, R2 file uploads, automatic IP detection, and geolocation tracking.",
    packages: [
      { type: "npm", url: "https://www.npmjs.com/package/better-auth-cloudflare", name: "better-auth-cloudflare" }
    ],
    demos: [
      { url: "https://github.com/zpg6/better-auth-cloudflare#demo", text: "OpenNextJS" },
      { url: "https://github.com/zpg6/better-auth-cloudflare#demo", text: "Hono" }
    ],
    relatedLinks: [
      { url: "https://www.better-auth.com/", text: "Better Auth" }
    ],
    why: "There's some nuance to configuring Better Auth with OpenNextJS, Drizzle ORM, and D1 for migrations with a decent DX. With this underneath, it really feels like you can focus on your application since everything's just taken care of (something I've been pitched many times but never truly felt)."
  },
  {
    name: "esptool-react",
    githubUrl: "https://github.com/zpg6/esptool-react",
    description: "A React library that provides hooks and context for programming ESP32/ESP8266 devices using esptool-js. Features React Hooks & Context API, Web Serial API integration, browser compatibility detection, firmware validation, real-time progress tracking, full TypeScript support, multi-chip support (ESP32, ESP8266), file management with address validation, and modern React 17+ hooks-first approach.",
    packages: [
      { type: "npm", url: "https://www.npmjs.com/package/esptool-react", name: "esptool-react" }
    ],
    demos: [
      { url: "https://esptool-react.com", text: "esptool-react.com" }
    ],
    relatedLinks: [
      { url: "https://github.com/esphome/esptool-js/issues/71", text: "this issue" },
      { url: "https://github.com/esphome/esphome/issues/7565#issuecomment-2393913651", text: "this issue" }
    ],
    why: "Ran into this issue with TypeScript port of the esptool and saw the President @OpenHomeFoundation. Founder @home-assistant respond with \"Visit a React forum for guidance on React projects.\" on this issue for ESPHome. It was time to make my own."
  },
  {
    name: "lin-ldf",
    githubUrl: "https://github.com/zpg6/lin-ldf",
    description: "A LIN Description File (.ldf) parser written in Rust using the nom parser combinator library. LIN is an automotive serial protocol used for communication between ECUs in vehicles, and LDF files describe network configuration including nodes and signals. The parser follows the LIN 2.2A specification and supports most LDF sections including protocol/language versions, nodes, signals, frames, node attributes, and schedule tables.",
    packages: [
      { type: "crates", url: "https://crates.io/crates/lin-ldf", name: "lin-ldf" }
    ],
    relatedLinks: [
      { url: "https://docs.rs/lin-ldf", text: "docs.rs" }
    ],
    why: "I really wanted to build something with nom and had been looking for an activity to learn more about LIN Description Files."
  },
  {
    name: "azure-ai-inference-plus",
    githubUrl: "https://github.com/zpg6/azure-ai-inference-plus",
    description: "Enhanced wrapper for Azure AI Inference SDK that makes it simple and reliable with automatic retry, JSON validation, and reasoning separation. Features include automatic retries for service overloads/rate limits/timeouts, guaranteed valid JSON responses, reasoning separation for models like DeepSeek-R1, 100% compatibility as drop-in replacement, and smart retry configuration with observability callbacks.",
    packages: [
      { type: "pypi", url: "https://pypi.org/project/azure-ai-inference-plus", name: "azure-ai-inference-plus" }
    ],
    why: "I was tired of my LangGraph agents failing when I needed to use Azure as my LLM provider."
  },
  {
    name: "langchain-azure-ai-inference-plus",
    githubUrl: "https://github.com/zpg6/langchain-azure-ai-inference-plus",
    description: "Enhanced LangChain integration for Azure AI Inference Plus with automatic reasoning separation, guaranteed JSON validation, and smart retries. Features include full LangChain compatibility as drop-in replacement, reasoning separation with clean output and accessible thinking, automatic retries for production reliability, unified chat models and embeddings support, seamless integration with chains/agents/tools/vector stores, and one-import setup.",
    packages: [
      { type: "pypi", url: "https://pypi.org/project/langchain-azure-ai-inference-plus", name: "langchain-azure-ai-inference-plus" }
    ],
    relatedLinks: [
      { url: "https://github.com/zpg6/azure-ai-inference-plus", text: "azure-ai-inference-plus" }
    ],
    why: "After implementing azure-ai-inference-plus, I wanted it to be more convenient to use with LangChain."
  }
];

const inProgressProjects: InProgressProject[] = [
  {
    name: "Hex Calculator",
    githubUrl: "https://github.com/zpg6/hex-calculator",
    description: "A simple calculator that converts between decimal, binary, and hexadecimal numbers.",
    why: "Always told myself one day I'd make a hex calculator site because I was tired of going to someone else's."
  }
];

const interests = [
  "Async Embedded Rust for low-power or battery-powered microcontrollers.",
  "Rust for automotive networking and application interface tooling.",
  "Flutter applications that use serial to communicate with microcontrollers.",
  "BLE-based file transfer for embedded systems.",
  "Distributed compiler service for Android OS development and large Rust projects."
];

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
              className={`px-6 py-2 border border-zinc-600 hover:bg-zinc-800 transition-colors ${
                currentPage === "home" ? "bg-zinc-800" : ""
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage("projects")}
              className={`px-6 py-2 border border-zinc-600 hover:bg-zinc-800 transition-colors ${
                currentPage === "projects" ? "bg-zinc-800" : ""
              }`}
            >
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
              href="https://linkedin.com/in/zpg6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-zinc-600 hover:bg-zinc-800 transition-colors"
            >
              LinkedIn
            </a>
          </nav>
        </header>

        <hr className="border-zinc-700 mb-12" />

        {currentPage === "home" ? <HomePage /> : <ProjectsPage />}
      </div>
    </div>
  );
}

function HomePage() {
  return (
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
  );
}

function getPackageLabel(type: PackageType): string {
  const labels: Record<PackageType, string> = {
    npm: "NPM",
    pypi: "PyPI",
    crates: "crates.io"
  };
  return labels[type];
}

function ProjectsPage() {
  return (
    <main className="space-y-12 pb-8">
      <section>
        <h3 className="text-3xl font-bold mb-6">Published Packages</h3>
        <ul className="space-y-8">
          {publishedProjects.map((project) => (
            <li key={project.name} className="space-y-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 p-4 border border-zinc-700 hover:border-cyan-500/50 hover:bg-zinc-900/50 transition-all w-full"
              >
                <Github className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-lg font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </div>
                  <div className="text-sm text-zinc-500">GitHub</div>
                </div>
                <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </a>
              
              <div className="space-y-3">
                <p className="text-lg leading-relaxed">
                  {project.description}
                  {project.relatedLinks && project.relatedLinks.length > 0 && (
                    <>
                      {" "}
                      {project.relatedLinks.map((link, idx) => (
                        <span key={idx}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 hover:decoration-cyan-300 transition-colors"
                          >
                            {link.text}
                          </a>
                          {idx < project.relatedLinks!.length - 1 && ", "}
                        </span>
                      ))}
                    </>
                  )}
                  {project.packages && project.packages.length > 0 && (
                    <>
                      {" "}Available on{" "}
                      {project.packages.map((pkg, idx) => (
                        <span key={idx}>
                          <a
                            href={pkg.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors group"
                          >
                            <Package className="w-4 h-4" />
                            <span className="underline decoration-cyan-400/30 group-hover:decoration-cyan-300">
                              {pkg.name}
                            </span>
                            <span className="text-xs text-zinc-500 group-hover:text-zinc-400">{getPackageLabel(pkg.type)}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          {idx < project.packages.length - 1 && ", "}
                        </span>
                      ))}
                    </>
                  )}
                  {project.demos && project.demos.length > 0 && (
                    <>
                      {" "}with live {project.demos.length === 1 ? "demo" : "demos"}:{" "}
                      {project.demos.map((demo, idx) => (
                        <span key={idx}>
                          <a
                            href={demo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/30 hover:decoration-cyan-300 transition-colors"
                          >
                            {demo.text}
                          </a>
                          {idx < project.demos.length - 1 && " and "}
                        </span>
                      ))}
                    </>
                  )}
                  .
                </p>
                
                {project.why && (
                  <p className="text-base text-zinc-400 italic leading-relaxed">
                    Why I built this: {project.why}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-3xl font-bold mb-6">In Progress</h3>
        <ul className="space-y-8">
          {inProgressProjects.map((project) => (
            <li key={project.name} className="space-y-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 p-4 border border-zinc-700 hover:border-cyan-500/50 hover:bg-zinc-900/50 transition-all w-full"
              >
                <Wrench className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-lg font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </div>
                  <div className="text-sm text-zinc-500">GitHub</div>
                </div>
                <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </a>
              
              <div className="space-y-3">
                <p className="text-lg leading-relaxed">{project.description}</p>
                
                {project.why && (
                  <p className="text-base text-zinc-400 italic leading-relaxed">
                    Why I built this: {project.why}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-3xl font-bold mb-6">Some topics I'm interested in right now</h3>
        <ul className="space-y-3">
          {interests.map((interest, idx) => (
            <li key={idx} className="flex items-start gap-3 text-lg leading-relaxed">
              <span className="text-zinc-400 mt-1">•</span>
              <span>{interest}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
