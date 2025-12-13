import { Github, ExternalLink } from "lucide-react";
import { githubLinks } from "@/constants";

export function HomePage() {
    return (
        <main className="space-y-12">
            <section>
                <h2 className="text-4xl font-bold mb-6">Hello World! 👋</h2>
            </section>

            <section>
                <h3 className="text-3xl font-bold mb-4">About me</h3>
                <p className="text-lg leading-relaxed">
                    I'm a software engineer with a Computer Science degree from University of Pittsburgh. I've been
                    working in the automotive industry for the past 5 years.
                </p>
            </section>

            <section>
                <h3 className="text-3xl font-bold mb-4">About the site</h3>

                <p className="text-lg leading-relaxed mb-4">
                    Written in <span className="text-cyan-400">React</span> ⚛️ with{" "}
                    <span className="text-cyan-400">TypeScript</span> using Vite ⚡, styled with Tailwind CSS 🎨, and
                    deployed to <span className="text-orange-400">Cloudflare Pages</span> 🔶 (globally distributed edge
                    network).
                </p>

                <ul className="space-y-3 text-lg">
                    <li className="flex items-start gap-2">
                        <span className="text-zinc-400 mt-1">•</span>
                        <span>
                            Leverages Vite's lightning-fast HMR and optimized build process for instant development
                            feedback and production-ready bundles.
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-zinc-400 mt-1">•</span>
                        <span>
                            Tailwind CSS provides utility-first styling with minimal bundle size, while shadcn/ui
                            components offer accessible, customizable primitives.
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-zinc-400 mt-1">•</span>
                        <span>
                            Cloudflare Pages serves static assets from 275+ global edge locations with automatic HTTPS,
                            Git integration, and preview deployments.
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
                        className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-500 transition-colors group dark:text-teal-400 dark:hover:text-teal-300"
                    >
                        <Github className="w-5 h-5" />
                        <span className="underline decoration-teal-600/30 group-hover:decoration-teal-500/40 dark:decoration-teal-400/30 dark:group-hover:decoration-teal-300">
                            GitHub
                        </span>
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </p>
            </section>
        </main>
    );
}
