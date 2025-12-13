import { Github, ExternalLink, ArrowRight, Package, Wrench } from "lucide-react";
import { publishedProjects, inProgressProjects } from "@/constants/projects";
import { interests } from "@/constants";
import { getPackageLabel } from "@/lib/package-utils";

export function ProjectsPage() {
    return (
        <main className="space-y-12 pb-8">
            <section>
                <h3 className="text-3xl font-bold mb-6">Published Packages</h3>
                <ul className="space-y-8">
                    {publishedProjects.map(project => {
                        const relatedLinks = project.relatedLinks;
                        const packages = project.packages;
                        const demos = project.demos;

                        return (
                            <li key={project.name} className="space-y-3">
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-3 p-4 border border-zinc-200 hover:border-teal-500/50 hover:bg-zinc-50 transition-all w-full dark:border-zinc-700 dark:hover:bg-zinc-900/50"
                                >
                                    <Github className="w-5 h-5 text-zinc-500 flex-shrink-0 dark:text-zinc-400" />
                                    <div className="flex-1 min-w-0">
                                        <div className="text-lg font-semibold text-teal-600 group-hover:text-teal-700 transition-colors dark:text-teal-400 dark:group-hover:text-teal-300">
                                            {project.name}
                                        </div>
                                        <div className="text-sm text-zinc-500">GitHub</div>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-teal-600 group-hover:translate-x-1 transition-all flex-shrink-0 dark:text-zinc-400 dark:group-hover:text-teal-400" />
                                </a>

                                <div className="space-y-3">
                                    <p className="text-lg leading-relaxed">
                                        {project.description}
                                        {relatedLinks && relatedLinks.length > 0 && (
                                            <>
                                                {" "}
                                                {relatedLinks.map((link, idx) => (
                                                    <span key={idx}>
                                                        <a
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-teal-600 hover:text-teal-500 underline decoration-teal-600/30 hover:decoration-teal-500/40 transition-colors dark:text-teal-400 dark:hover:text-teal-300 dark:decoration-teal-400/30 dark:hover:decoration-teal-300"
                                                        >
                                                            {link.text}
                                                        </a>
                                                        {idx < relatedLinks.length - 1 && ", "}
                                                    </span>
                                                ))}
                                            </>
                                        )}
                                        {packages && packages.length > 0 && (
                                            <>
                                                {" "}
                                                Available on{" "}
                                                {packages.map((pkg, idx) => (
                                                    <span key={idx}>
                                                        <a
                                                            href={pkg.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1.5 text-teal-600 hover:text-teal-500 transition-colors group dark:text-teal-400 dark:hover:text-teal-300"
                                                        >
                                                            <Package className="w-4 h-4" />
                                                            <span className="underline decoration-teal-600/30 group-hover:decoration-teal-500/40 dark:decoration-teal-400/30 dark:group-hover:decoration-teal-300">
                                                                {pkg.name}
                                                            </span>
                                                            <span className="text-xs text-zinc-500 group-hover:text-zinc-400">
                                                                {getPackageLabel(pkg.type)}
                                                            </span>
                                                            <ExternalLink className="w-3 h-3" />
                                                        </a>
                                                        {idx < packages.length - 1 && ", "}
                                                    </span>
                                                ))}
                                            </>
                                        )}
                                        {demos && demos.length > 0 && (
                                            <>
                                                {" "}
                                                with live {demos.length === 1 ? "demo" : "demos"}:{" "}
                                                {demos.map((demo, idx) => (
                                                    <span key={idx}>
                                                        <a
                                                            href={demo.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-teal-600 hover:text-teal-500 underline decoration-teal-600/30 hover:decoration-teal-500/40 transition-colors dark:text-teal-400 dark:hover:text-teal-300 dark:decoration-teal-400/30 dark:hover:decoration-teal-300"
                                                        >
                                                            {demo.text}
                                                        </a>
                                                        {idx < demos.length - 1 && " and "}
                                                    </span>
                                                ))}
                                            </>
                                        )}
                                        .
                                    </p>

                                    {project.why && (
                                        <p className="text-base text-zinc-600 dark:text-zinc-400 italic leading-relaxed">
                                            Why I built this: {project.why}
                                        </p>
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>

            <section>
                <h3 className="text-3xl font-bold mb-6">In Progress</h3>
                <ul className="space-y-8">
                    {inProgressProjects.map(project => (
                        <li key={project.name} className="space-y-3">
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 p-4 border border-zinc-200 hover:border-teal-500/50 hover:bg-zinc-50 transition-all w-full dark:border-zinc-700 dark:hover:bg-zinc-900/50"
                            >
                                <Wrench className="w-5 h-5 text-zinc-500 flex-shrink-0 dark:text-zinc-400" />
                                <div className="flex-1 min-w-0">
                                    <div className="text-lg font-semibold text-teal-600 group-hover:text-teal-700 transition-colors dark:text-teal-400 dark:group-hover:text-teal-300">
                                        {project.name}
                                    </div>
                                    <div className="text-sm text-zinc-500">GitHub</div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-teal-600 group-hover:translate-x-1 transition-all flex-shrink-0 dark:text-zinc-400 dark:group-hover:text-teal-400" />
                            </a>

                            <div className="space-y-3">
                                <p className="text-lg leading-relaxed">{project.description}</p>

                                {project.why && (
                                    <p className="text-base text-zinc-600 dark:text-zinc-400 italic leading-relaxed">
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
