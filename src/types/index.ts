export type Page = "home" | "projects";

export type PackageType = "npm" | "pypi" | "crates" | "vscode";

export interface PackageLink {
    type: PackageType;
    url: string;
    name: string;
}

export interface Project {
    name: string;
    githubUrl: string;
    description: string;
    packages?: PackageLink[];
    demos?: Array<{ url: string; text: string }>;
    relatedLinks?: Array<{ url: string; text: string }>;
    why?: string;
}

export interface InProgressProject {
    name: string;
    githubUrl: string;
    description: string;
    why?: string;
}
