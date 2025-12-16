import type { PackageType } from "@/types";

export function getPackageLabel(type: PackageType): string {
    const labels: Record<PackageType, string> = {
        npm: "NPM",
        pypi: "PyPI",
        crates: "crates.io",
        vscode: "VS Marketplace",
    };
    return labels[type];
}
