import { Github, ExternalLink } from "lucide-react";
import { githubLinks, interests } from "@/constants";
import inspectorLogoUrl from "@/assets/inspector-logo.png";

export function HomePage() {
    return (
        <main className="space-y-16 pb-8">
            <section className="grid items-start gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
                <div className="space-y-6">
                    <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                        <span className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
                        Hello, I'm Zach
                    </p>

                    <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
                        Software engineer building tools for{" "}
                        <span className="text-teal-600 dark:text-teal-400">automotive</span>,{" "}
                        <span className="text-amber-600 dark:text-amber-400">embedded</span>, and{" "}
                        <span className="text-sky-600 dark:text-sky-400">developer experience</span>.
                    </h2>

                    <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                        I'm a software engineer with a Computer Science degree from the University of Pittsburgh,
                        currently working in the automotive industry. I like taking low-level constraints and turning
                        them into approachable tools and workflows.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href={githubLinks.profile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 border border-zinc-900 bg-zinc-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-50 transition-colors hover:bg-zinc-800 dark:border-zinc-100 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
                        >
                            <Github className="h-4 w-4" />
                            <span>View GitHub</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                        </a>

                        <div className="flex flex-wrap gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                            <span className="inline-flex items-center gap-2 border border-zinc-200 bg-zinc-50 px-3 py-1 dark:border-zinc-700 dark:bg-zinc-900">
                                <span className="h-1.5 w-1.5 bg-emerald-500" />
                                Automotive & embedded systems
                            </span>
                            <span className="inline-flex items-center gap-2 border border-zinc-200 bg-zinc-50 px-3 py-1 dark:border-zinc-700 dark:bg-zinc-900">
                                <span className="h-1.5 w-1.5 bg-sky-500" />
                                Developer tooling
                            </span>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="pointer-events-none absolute inset-0 -z-10">
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-200/40 via-transparent to-sky-200/40 blur-3xl dark:from-amber-300/20 dark:to-sky-300/20" />
                    </div>

                    <div className="space-y-5 border border-zinc-200 bg-card/80 px-6 py-5 shadow-sm backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-900/80">
                        <div className="flex items-center gap-4">
                            <div className="grid h-16 w-16 place-items-center bg-white shadow-sm dark:bg-zinc-900">
                                <img
                                    src={inspectorLogoUrl}
                                    alt="Inspector logo"
                                    className="h-10 w-10 object-contain"
                                    draggable={false}
                                />
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                                    Built with Inspector
                                </p>
                                <p className="text-sm text-zinc-700 dark:text-zinc-200">
                                    The AI IDE that runs in your browser, tightly integrated with coding agents.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-2 border-t border-dashed border-zinc-200 pt-4 text-sm dark:border-zinc-700">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                                Stack
                            </p>
                            <p className="text-sm text-zinc-700 dark:text-zinc-200">
                                React, TypeScript, Vite, Tailwind, Cloudflare Pages.
                            </p>
                        </div>

                        <a
                            href={githubLinks.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 underline decoration-teal-600/30 underline-offset-4 transition-colors hover:text-teal-500 hover:decoration-teal-500/40 dark:text-teal-400 dark:decoration-teal-400/30 dark:hover:text-teal-300 dark:hover:decoration-teal-300"
                        >
                            <span>View this site's source</span>
                            <Github className="h-4 w-4" />
                            <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                    </div>
                </div>
            </section>

            <section className="grid gap-10 md:grid-cols-3">
                <div className="space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                        About
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                        Over the past few years I've focused on automotive systems and tooling, from embedded
                        microcontrollers up through developer-facing libraries. I care about tight feedback loops,
                        predictable systems, and making complex domains feel approachable.
                    </p>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                        Currently interested in
                    </h3>
                    <ul className="space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                        {interests.slice(0, 3).map(interest => (
                            <li key={interest} className="flex gap-3">
                                <span className="mt-2 h-px w-6 flex-shrink-0 bg-zinc-300 dark:bg-zinc-700" />
                                <span>{interest}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                        Where I like to work
                    </h3>
                    <div className="space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                        <p>Rust, TypeScript, React, Cloudflare, Flutter, embedded systems, and networking.</p>
                        <p className="text-zinc-500 dark:text-zinc-400">
                            I enjoy bridging hardware, the browser, and tooling so they feel like one cohesive
                            environment.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-t border-zinc-200 pt-8 text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        Built with React, TypeScript, Vite, Tailwind CSS, and{" "}
                        <span className="text-orange-500 dark:text-orange-400">Cloudflare Pages</span>.
                    </p>
                    <p className="flex items-center gap-2">
                        <span className="text-zinc-400">Source:</span>
                        <a
                            href={githubLinks.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-teal-600 underline decoration-teal-600/30 underline-offset-4 transition-colors hover:text-teal-500 hover:decoration-teal-500/40 dark:text-teal-400 dark:decoration-teal-400/30 dark:hover:text-teal-300 dark:hover:decoration-teal-300"
                        >
                            <Github className="h-4 w-4" />
                            <span>GitHub</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                    </p>
                </div>
            </section>
        </main>
    );
}
