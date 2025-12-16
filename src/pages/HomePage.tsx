import { ExternalLink } from "lucide-react";
import { githubLinks, interests } from "@/constants";
import inspectorLogoUrl from "@/assets/inspector-logo.png";

function GitHubMarkIcon() {
    return (
        <svg viewBox="0 0 128 128" className="h-4 w-4" aria-hidden="true">
            <g fill="currentColor">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                />
                <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" />
            </g>
        </svg>
    );
}

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
                        Software engineer building for{" "}
                        <span className="text-teal-600 dark:text-teal-400">embedded</span>,{" "}
                        <span className="text-amber-600 dark:text-amber-400">smart IoT</span>, and{" "}
                        <span className="text-sky-600 dark:text-sky-400">developer tooling</span>.
                    </h2>

                    <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                        I'm a software engineer with a Computer Science degree from the{" "}
                        <span className="font-bold">University of Pittsburgh</span>, currently working in the automotive
                        industry.
                    </p>

                    <div className="flex flex-wrap items-start gap-6">
                        <div className="flex flex-col gap-1">
                            <a
                                href={githubLinks.profile}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-between gap-4 border border-dashed border-zinc-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-900/50"
                            >
                                <span className="flex items-center gap-3">
                                    <span className="inline-flex h-7 w-7 items-center justify-center overflow-hidden border border-dashed border-zinc-400 bg-zinc-100 dark:border-zinc-500 dark:bg-zinc-800">
                                        <img
                                            src="https://github.com/zpg6.png"
                                            alt="GitHub avatar for zpg6"
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                            decoding="async"
                                            onLoad={e => e.currentTarget.classList.add("loaded")}
                                        />
                                    </span>
                                    <span className="flex flex-col items-start leading-tight">
                                        <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-zinc-500 dark:text-zinc-300">
                                            Personal GitHub
                                        </span>
                                        <span className="flex items-center gap-1 text-sm font-semibold tracking-[0.12em]">
                                            <span>zpg6</span>
                                            <GitHubMarkIcon />
                                        </span>
                                    </span>
                                </span>
                                <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" />
                            </a>
                            <p className="max-w-xs text-[0.7rem] leading-snug text-zinc-500 dark:text-zinc-400">
                                Most of my daily work, especially embedded, lives on a private GitHub Enterprise under a
                                work account.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                            <span className="inline-flex items-center gap-2 border border-zinc-200 bg-zinc-50 px-3 py-1 dark:border-zinc-700 dark:bg-zinc-900">
                                <span className="h-1.5 w-1.5 bg-emerald-500" />
                                Automotive & embedded protocols
                            </span>
                            <span className="inline-flex items-center gap-2 border border-zinc-200 bg-zinc-50 px-3 py-1 dark:border-zinc-700 dark:bg-zinc-900">
                                <span className="h-1.5 w-1.5 bg-sky-500" />
                                Developer automations
                            </span>
                            <span className="inline-flex items-center gap-2 border border-zinc-200 bg-zinc-50 px-3 py-1 dark:border-zinc-700 dark:bg-zinc-900">
                                <span className="h-1.5 w-1.5 bg-purple-500" />
                                Type-safe development
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
                            <div className="relative grid h-16 w-16 shrink-0 aspect-square place-items-center overflow-hidden rounded-[26%] border border-zinc-200/80 bg-white shadow-[0_14px_32px_rgba(15,23,42,0.28)] dark:border-zinc-300/80 dark:bg-white dark:shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/45 via-white/10 to-black/15 opacity-90 dark:from-white/18 dark:via-transparent dark:to-black/50" />
                                <div className="pointer-events-none absolute inset-px rounded-[24%] border border-white/70 dark:border-white/5" />
                                <img
                                    src={inspectorLogoUrl}
                                    alt="Inspector logo"
                                    className="relative z-10 h-12 w-12 object-contain"
                                    draggable={false}
                                    onLoad={e => e.currentTarget.classList.add("loaded")}
                                />
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                                    Built with Inspector
                                </p>
                                <p className="text-sm text-zinc-700 dark:text-zinc-200">
                                    The AI IDE that runs in your browser, tightly integrated with coding agents.
                                </p>
                                <a
                                    href="https://tryinspector.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 underline decoration-teal-600/30 underline-offset-4 transition-colors hover:text-teal-500 hover:decoration-teal-500/40 dark:text-teal-400 dark:decoration-teal-400/30 dark:hover:text-teal-300 dark:hover:decoration-teal-300"
                                >
                                    <span>Try Inspector</span>
                                    <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                            </div>
                        </div>

                        <div className="border-t border-dashed border-zinc-200 pt-4 dark:border-zinc-700">
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 underline decoration-teal-600/30 underline-offset-4 transition-colors hover:text-teal-500 hover:decoration-teal-500/40 dark:text-teal-400 dark:decoration-teal-400/30 dark:hover:text-teal-300 dark:hover:decoration-teal-300"
                            >
                                <span>How I built this site with Inspector</span>
                                <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid gap-10 md:grid-cols-3">
                <div className="space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                        About me
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
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-zinc-400 dark:text-zinc-500">Built with</span>
                        <span className="border border-zinc-200 bg-zinc-50/50 px-2 py-0.5 text-xs font-medium dark:border-zinc-700 dark:bg-zinc-900/50">
                            React
                        </span>
                        <span className="border border-zinc-200 bg-zinc-50/50 px-2 py-0.5 text-xs font-medium dark:border-zinc-700 dark:bg-zinc-900/50">
                            TypeScript
                        </span>
                        <span className="border border-zinc-200 bg-zinc-50/50 px-2 py-0.5 text-xs font-medium dark:border-zinc-700 dark:bg-zinc-900/50">
                            Vite
                        </span>
                        <span className="border border-zinc-200 bg-zinc-50/50 px-2 py-0.5 text-xs font-medium dark:border-zinc-700 dark:bg-zinc-900/50">
                            Tailwind CSS
                        </span>
                        <span className="text-zinc-400 dark:text-zinc-500">and</span>
                        <span className="border border-orange-200 bg-orange-50/50 px-2 py-0.5 text-xs font-medium text-orange-600 dark:border-orange-800 dark:bg-orange-950/30 dark:text-orange-400">
                            Cloudflare Pages
                        </span>
                    </div>
                    <p className="flex items-center gap-2">
                        <span className="text-zinc-400">Source:</span>
                        <a
                            href={githubLinks.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-teal-600 underline decoration-teal-600/30 underline-offset-4 transition-colors hover:text-teal-500 hover:decoration-teal-500/40 dark:text-teal-400 dark:decoration-teal-400/30 dark:hover:text-teal-300 dark:hover:decoration-teal-300"
                        >
                            <GitHubMarkIcon />
                            <span>GitHub</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                    </p>
                </div>
            </section>
        </main>
    );
}
