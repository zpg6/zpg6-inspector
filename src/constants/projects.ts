import type { Project, InProgressProject } from "@/types";

export const publishedProjects: Project[] = [
    {
        name: "better-auth-cloudflare",
        githubUrl: "https://github.com/zpg6/better-auth-cloudflare",
        description:
            "A Cloudflare adapter for Better Auth, the comprehensive TypeScript authentication framework. Seamlessly integrates Better Auth's features (email/password, social providers, 2FA, passkeys, anonymous auth) with Cloudflare's edge infrastructure. Adds native support for Workers runtime, D1 database, KV storage, R2 file uploads, automatic IP detection, and geolocation tracking.",
        packages: [
            {
                type: "npm",
                url: "https://www.npmjs.com/package/better-auth-cloudflare",
                name: "better-auth-cloudflare",
            },
        ],
        demos: [
            { url: "https://github.com/zpg6/better-auth-cloudflare#demo", text: "OpenNextJS" },
            { url: "https://github.com/zpg6/better-auth-cloudflare#demo", text: "Hono" },
        ],
        relatedLinks: [{ url: "https://www.better-auth.com/", text: "Better Auth" }],
        why: "There's some nuance to configuring Better Auth with OpenNextJS, Drizzle ORM, and D1 for migrations with a decent DX. With this underneath, it really feels like you can focus on your application since everything's just taken care of (something I've been pitched many times but never truly felt).",
    },
    {
        name: "esptool-react",
        githubUrl: "https://github.com/zpg6/esptool-react",
        description:
            "A React library that provides hooks and context for programming ESP32/ESP8266 devices using esptool-js. Features React Hooks & Context API, Web Serial API integration, browser compatibility detection, firmware validation, real-time progress tracking, full TypeScript support, multi-chip support (ESP32, ESP8266), file management with address validation, and modern React 17+ hooks-first approach.",
        packages: [{ type: "npm", url: "https://www.npmjs.com/package/esptool-react", name: "esptool-react" }],
        demos: [{ url: "https://esptool-react.com", text: "esptool-react.com" }],
        relatedLinks: [
            { url: "https://github.com/esphome/esptool-js/issues/71", text: "this issue" },
            { url: "https://github.com/esphome/esphome/issues/7565#issuecomment-2393913651", text: "this issue" },
        ],
        why: 'Ran into this issue with TypeScript port of the esptool and saw the President @OpenHomeFoundation. Founder @home-assistant respond with "Visit a React forum for guidance on React projects." on this issue for ESPHome. It was time to make my own.',
    },
    {
        name: "lin-ldf",
        githubUrl: "https://github.com/zpg6/lin-ldf",
        description:
            "A LIN Description File (.ldf) parser written in Rust using the nom parser combinator library. LIN is an automotive serial protocol used for communication between ECUs in vehicles, and LDF files describe network configuration including nodes and signals. The parser follows the LIN 2.2A specification and supports most LDF sections including protocol/language versions, nodes, signals, frames, node attributes, and schedule tables.",
        packages: [{ type: "crates", url: "https://crates.io/crates/lin-ldf", name: "lin-ldf" }],
        relatedLinks: [{ url: "https://docs.rs/lin-ldf", text: "docs.rs" }],
        why: "I really wanted to build something with nom and had been looking for an activity to learn more about LIN Description Files.",
    },
    {
        name: "azure-ai-inference-plus",
        githubUrl: "https://github.com/zpg6/azure-ai-inference-plus",
        description:
            "Enhanced wrapper for Azure AI Inference SDK that makes it simple and reliable with automatic retry, JSON validation, and reasoning separation. Features include automatic retries for service overloads/rate limits/timeouts, guaranteed valid JSON responses, reasoning separation for models like DeepSeek-R1, 100% compatibility as drop-in replacement, and smart retry configuration with observability callbacks.",
        packages: [
            { type: "pypi", url: "https://pypi.org/project/azure-ai-inference-plus", name: "azure-ai-inference-plus" },
        ],
        why: "I was tired of my LangGraph agents failing when I needed to use Azure as my LLM provider.",
    },
    {
        name: "langchain-azure-ai-inference-plus",
        githubUrl: "https://github.com/zpg6/langchain-azure-ai-inference-plus",
        description:
            "Enhanced LangChain integration for Azure AI Inference Plus with automatic reasoning separation, guaranteed JSON validation, and smart retries. Features include full LangChain compatibility as drop-in replacement, reasoning separation with clean output and accessible thinking, automatic retries for production reliability, unified chat models and embeddings support, seamless integration with chains/agents/tools/vector stores, and one-import setup.",
        packages: [
            {
                type: "pypi",
                url: "https://pypi.org/project/langchain-azure-ai-inference-plus",
                name: "langchain-azure-ai-inference-plus",
            },
        ],
        relatedLinks: [{ url: "https://github.com/zpg6/azure-ai-inference-plus", text: "azure-ai-inference-plus" }],
        why: "After implementing azure-ai-inference-plus, I wanted it to be more convenient to use with LangChain.",
    },
];

export const inProgressProjects: InProgressProject[] = [
    {
        name: "Hex Calculator",
        githubUrl: "https://github.com/zpg6/hex-calculator",
        description: "A simple calculator that converts between decimal, binary, and hexadecimal numbers.",
        why: "Always told myself one day I'd make a hex calculator site because I was tired of going to someone else's.",
    },
];
