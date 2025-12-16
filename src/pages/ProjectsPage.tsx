import { ExternalLink, Wrench } from "lucide-react";
import { publishedProjects, inProgressProjects } from "@/constants/projects";
import { interests } from "@/constants";
import { getPackageLabel } from "@/lib/package-utils";
import type { PackageType } from "@/types";
import { JSX } from "react";

function NpmIcon() {
    return (
        <svg viewBox="0 0 128 128" className="h-5 w-5" aria-hidden="true">
            <path
                fill="#cb3837"
                d="m0 7.0624c0-3.8376 3.2248-7.0624 7.0624-7.0624h113.88c3.8376 0 7.0624 3.2248 7.0624 7.0624v113.88c0 3.8376-3.2248 7.0624-7.0624 7.0624h-113.88c-3.8376 0-7.0624-3.2248-7.0624-7.0624zm23.69 97.518h40.395l0.04975-58.532h19.494l-0.04975 58.581h19.543l0.0508-78.075-78.076-0.0995-0.0995 78.125z"
            />
            <path
                fill="#fff"
                d="m25.105 65.52v-39.008h15.855c8.7201 0 26.274 0.03373 39.008 0.07496l23.153 0.07496v77.866h-19.476v-58.54h-19.588v58.54h-38.952z"
            />
        </svg>
    );
}

function GitHubIcon() {
    return (
        <svg viewBox="0 0 128 128" className="h-4 w-4 text-zinc-900 dark:text-zinc-50" aria-hidden="true">
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

function RustIcon() {
    return (
        <svg viewBox="0 0 128 128" className="h-5 w-5 text-zinc-900 dark:text-zinc-50" aria-hidden="true">
            <path
                fill="currentColor"
                d="M62.96.242c-.232.135-1.203 1.528-2.16 3.097-2.4 3.94-2.426 3.942-5.65.55-2.098-2.208-2.605-2.612-3.28-2.607-.44.002-.995.152-1.235.332-.24.18-.916 1.612-1.504 3.183-1.346 3.6-1.41 3.715-2.156 3.86-.46.086-1.343-.407-3.463-1.929-1.565-1.125-3.1-2.045-3.411-2.045-1.291 0-1.655.706-2.27 4.4-.78 4.697-.754 4.681-4.988 2.758-1.71-.776-3.33-1.41-3.603-1.41-.274 0-.792.293-1.15.652-.652.652-.653.655-.475 4.246l.178 3.595-.68.364c-.602.322-1.017.283-3.684-.348-3.48-.822-4.216-.8-4.92.15l-.516.693.692 2.964c.38 1.63.745 3.2.814 3.487.067.287-.05.746-.26 1.02-.348.448-.717.49-3.94.44-5.452-.086-5.761.382-3.51 5.3.718 1.56 1.305 2.98 1.305 3.15 0 .898-.717 1.224-3.794 1.727-1.722.28-3.218.51-3.326.51-.107 0-.43.235-.717.522-.937.936-.671 1.816 1.453 4.814 2.646 3.735 2.642 3.75-1.73 5.421-4.971 1.902-5.072 2.37-1.287 5.96 3.525 3.344 3.53 3.295-.461 5.804C.208 62.8.162 62.846.085 63.876c-.093 1.253-.071 1.275 3.538 3.48 3.57 2.18 3.57 2.246.067 5.56C-.078 76.48.038 77 5.013 78.877c4.347 1.64 4.353 1.66 1.702 5.394-1.502 2.117-1.981 3-1.981 3.653 0 1.223.637 1.535 4.44 2.174 3.206.54 3.92.857 3.92 1.741 0 .182-.588 1.612-1.307 3.177-2.236 4.87-1.981 5.275 3.31 5.275 4.93 0 4.799-.15 3.737 4.294-.8 3.35-.813 3.992-.088 4.715.554.556 1.6.494 4.87-.289 2.499-.596 2.937-.637 3.516-.328l.66.354-.177 3.594c-.178 3.593-.177 3.595.475 4.248.358.36.884.652 1.165.652.282 0 1.903-.63 3.604-1.404 4.22-1.916 4.194-1.932 4.973 2.75.617 3.711.977 4.4 2.294 4.4.327 0 1.83-.88 3.34-1.958 2.654-1.893 3.342-2.19 4.049-1.74.182.115.89 1.67 1.572 3.455 1.003 2.625 1.37 3.31 1.929 3.576 1.062.51 1.72.1 4.218-2.62 3.016-3.286 3.14-3.27 5.602.72 2.72 4.406 3.424 4.396 6.212-.089 2.402-3.864 2.374-3.862 5.621-.47 2.157 2.25 2.616 2.61 3.343 2.61.464 0 1.019-.175 1.23-.388.214-.213.92-1.786 1.568-3.496.649-1.71 1.321-3.2 1.495-3.31.687-.436 1.398-.13 4.048 1.752 1.56 1.108 3.028 1.96 3.377 1.96 1.296 0 1.764-.92 2.302-4.535.46-3.082.554-3.378 1.16-3.685.596-.302.954-.2 3.75 1.07 1.701.77 3.323 1.402 3.604 1.402.282 0 .816-.302 1.184-.672l.672-.67-.184-3.448c-.177-3.29-.16-3.468.364-3.943.54-.488.596-.486 3.615.204 3.656.835 4.338.857 5.025.17.671-.67.664-.818-.254-4.69-1.03-4.346-1.168-4.19 3.78-4.19 3.374 0 3.75-.049 4.18-.523.718-.793.547-1.702-.896-4.779-.729-1.55-1.32-2.96-1.315-3.135.024-.914.743-1.227 4.065-1.767 2.033-.329 3.553-.71 3.829-.96.923-.833.584-1.918-1.523-4.873-2.642-3.703-2.63-3.738 1.599-5.297 5.064-1.866 5.209-2.488 1.419-6.09-3.51-3.335-3.512-3.317.333-5.677 4.648-2.853 4.655-3.496.082-6.335-3.933-2.44-3.93-2.406-.405-5.753 3.78-3.593 3.678-4.063-1.295-5.965-4.388-1.679-4.402-1.72-1.735-5.38 1.588-2.18 1.982-2.903 1.982-3.65 0-1.306-.586-1.598-4.436-2.22-3.216-.52-3.924-.835-3.924-1.75 0-.174.588-1.574 1.307-3.113 1.406-3.013 1.604-4.22.808-4.94-.428-.387-1-.443-4.067-.392-3.208.054-3.618.008-4.063-.439-.486-.488-.48-.557.278-3.725.931-3.88.935-3.975.17-4.694-.777-.73-1.262-.718-4.826.121-2.597.612-3.027.653-3.617.337l-.67-.36.185-3.582.186-3.58-.67-.67c-.369-.37-.891-.67-1.163-.67-.27 0-1.884.64-3.583 1.421-2.838 1.306-3.143 1.393-3.757 1.072-.612-.32-.714-.637-1.237-3.829-.603-3.693-.977-4.412-2.288-4.412-.311 0-1.853.925-3.426 2.055-2.584 1.856-2.93 2.032-3.574 1.807-.533-.186-.843-.59-1.221-1.599-.28-.742-.817-2.172-1.194-3.177-.762-2.028-1.187-2.482-2.328-2.482-.637 0-1.213.458-3.28 2.604-3.25 3.375-3.261 3.374-5.65-.545C66.073 1.78 65.075.382 64.81.24c-.597-.32-1.3-.32-1.85.002m2.96 11.798c2.83 2.014 1.326 6.75-2.144 6.75-3.368 0-5.064-4.057-2.66-6.36 1.358-1.3 3.304-1.459 4.805-.39m-3.558 12.507c1.855.705 2.616.282 6.852-3.8l3.182-3.07 1.347.18c4.225.56 12.627 4.25 17.455 7.666 4.436 3.14 10.332 9.534 12.845 13.93l.537.942-2.38 5.364c-1.31 2.95-2.382 5.673-2.382 6.053 0 .878.576 2.267 1.13 2.726.234.195 2.457 1.265 4.939 2.378l4.51 2.025.178 1.148c.23 1.495.26 5.167.052 6.21l-.163.816h-2.575c-2.987 0-2.756-.267-2.918 3.396-.118 2.656-.76 4.124-2.22 5.075-2.377 1.551-6.304 1.27-7.97-.57-.255-.284-.752-1.705-1.105-3.16-1.03-4.254-2.413-6.64-5.193-8.965-.878-.733-1.595-1.418-1.595-1.522 0-.102.965-.915 2.145-1.803 4.298-3.24 6.77-7.012 7.04-10.747.519-7.126-5.158-13.767-13.602-15.92-2.002-.51-2.857-.526-27.624-.526-14.057 0-25.56-.092-25.56-.204 0-.263 3.125-3.295 4.965-4.816 5.054-4.178 11.618-7.465 18.417-9.22l2.35-.61 3.34 3.387c1.839 1.863 3.64 3.5 4.003 3.637M20.3 46.34c1.539 1.008 2.17 3.54 1.26 5.062-1.405 2.356-4.966 2.455-6.373.178-2.046-3.309 1.895-7.349 5.113-5.24m90.672.13c4.026 2.454.906 8.493-3.404 6.586-2.877-1.273-2.97-5.206-.155-6.64 1.174-.6 2.523-.579 3.56.053M32.163 61.5v15.02h-13.28l-.526-2.285c-1.036-4.5-1.472-9.156-1.211-12.969l.182-2.679 4.565-2.047c2.864-1.283 4.706-2.262 4.943-2.625 1.038-1.584.94-2.715-.518-5.933l-.68-1.502h6.523V61.5M70.39 47.132c2.843.74 4.345 2.245 4.349 4.355.002 1.55-.765 2.52-2.67 3.38-1.348.61-1.562.625-10.063.708l-8.686.084v-8.92h7.782c6.078 0 8.112.086 9.288.393m-2.934 21.554c1.41.392 3.076 1.616 3.93 2.888.898 1.337 1.423 3.076 2.667 8.836 1.05 4.87 1.727 6.46 3.62 8.532 2.345 2.566 1.8 2.466 13.514 2.466 5.61 0 10.198.09 10.198.2 0 .197-3.863 4.764-4.03 4.764-.048 0-2.066-.422-4.484-.939-6.829-1.458-7.075-1.287-8.642 6.032l-1.008 4.702-.91.448c-1.518.75-6.453 2.292-9.01 2.82-4.228.87-8.828 1.162-12.871.821-6.893-.585-16.02-3.259-16.377-4.8-.075-.327-.535-2.443-1.018-4.704-.485-2.26-1.074-4.404-1.31-4.764-1.13-1.724-2.318-1.83-7.547-.674-1.98.44-3.708.796-3.84.796-.248 0-3.923-4.249-3.923-4.535 0-.09 8.728-.194 19.396-.23l19.395-.066.07-6.89c.05-4.865-.018-6.997-.23-7.25-.234-.284-1.485-.358-6.011-.358H53.32v-8.36l6.597.001c3.626.002 7.02.12 7.539.264M37.57 100.02c3.084 1.88 1.605 6.804-2.043 6.8-3.74 0-5.127-4.88-1.94-6.826 1.055-.643 2.908-.63 3.983.026m56.48.206c1.512 1.108 2.015 3.413 1.079 4.95-2.46 4.034-8.612.827-6.557-3.419 1.01-2.085 3.695-2.837 5.478-1.53"
            />
        </svg>
    );
}

function PythonIcon() {
    return (
        <svg viewBox="0 0 128 128" className="h-5 w-5" aria-hidden="true">
            <defs>
                <linearGradient
                    id="python-original-a"
                    gradientUnits="userSpaceOnUse"
                    x1="70.252"
                    y1="1237.476"
                    x2="170.659"
                    y2="1151.089"
                    gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                >
                    <stop offset="0" stopColor="#5A9FD4" />
                    <stop offset="1" stopColor="#306998" />
                </linearGradient>
                <linearGradient
                    id="python-original-b"
                    gradientUnits="userSpaceOnUse"
                    x1="209.474"
                    y1="1098.811"
                    x2="173.62"
                    y2="1149.537"
                    gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
                >
                    <stop offset="0" stopColor="#FFD43B" />
                    <stop offset="1" stopColor="#FFE873" />
                </linearGradient>
                <radialGradient
                    id="python-original-c"
                    cx="1825.678"
                    cy="444.45"
                    r="26.743"
                    gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#B8B8B8" stopOpacity=".498" />
                    <stop offset="1" stopColor="#7F7F7F" stopOpacity="0" />
                </radialGradient>
            </defs>
            <path
                fill="url(#python-original-a)"
                d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
                transform="translate(0 10.26)"
            />
            <path
                fill="url(#python-original-b)"
                d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
                transform="translate(0 10.26)"
            />
            <path
                opacity=".444"
                fill="url(#python-original-c)"
                d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"
            />
        </svg>
    );
}

function VscodeIcon() {
    return (
        <svg viewBox="0 0 128 128">
            <mask id="a" width="128" height="128" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }}>
                <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M90.767 127.126a7.968 7.968 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.327 5.327 0 0 0 6.807.303l21.974-16.68 50.45 46.025a7.96 7.96 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z"
                    clip-rule="evenodd"
                ></path>
            </mask>
            <g mask="url(#a)">
                <path
                    fill="#0065A9"
                    d="M123.471 13.82 97.097 1.12A7.973 7.973 0 0 0 88 2.668L1.662 81.387a5.333 5.333 0 0 0 .006 7.887l7.052 6.411a5.333 5.333 0 0 0 6.811.303l103.971-78.875c3.488-2.646 8.498-.158 8.498 4.22v-.306a8.001 8.001 0 0 0-4.529-7.208Z"
                ></path>
                <g filter="url(#b)">
                    <path
                        fill="#007ACC"
                        d="m123.471 114.181-26.374 12.698A7.973 7.973 0 0 1 88 125.333L1.662 46.613a5.333 5.333 0 0 1 .006-7.887l7.052-6.411a5.333 5.333 0 0 1 6.811-.303l103.971 78.874c3.488 2.647 8.498.159 8.498-4.219v.306a8.001 8.001 0 0 1-4.529 7.208Z"
                    ></path>
                </g>
                <g filter="url(#c)">
                    <path
                        fill="#1F9CF0"
                        d="M97.098 126.882A7.977 7.977 0 0 1 88 125.333c2.952 2.952 8 .861 8-3.314V5.98c0-4.175-5.048-6.266-8-3.313a7.977 7.977 0 0 1 9.098-1.549L123.467 13.8A8 8 0 0 1 128 21.01v85.982a8 8 0 0 1-4.533 7.21l-26.369 12.681Z"
                    ></path>
                </g>
                <path
                    fill="url(#d)"
                    fill-rule="evenodd"
                    d="M90.69 127.126a7.968 7.968 0 0 0 6.349-.244l26.353-12.681a8 8 0 0 0 4.53-7.21V21.009a8 8 0 0 0-4.53-7.21L97.039 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026-21.974-16.68a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.336 5.336 0 0 0-.006 7.888L20.718 64 1.662 81.386a5.335 5.335 0 0 0 .006 7.888l7.048 6.411a5.328 5.328 0 0 0 6.807.303l21.975-16.681 50.45 46.026a7.959 7.959 0 0 0 2.742 1.793Zm5.252-92.184L57.662 64l38.28 29.057V34.943Z"
                    clip-rule="evenodd"
                    opacity="0.25"
                    style={{ mixBlendMode: "overlay" }}
                ></path>
            </g>
            <defs>
                <filter
                    id="b"
                    width="144.744"
                    height="113.408"
                    x="-8.41115"
                    y="22.5944"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="4.16667"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow_1_36"></feBlend>
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_36" result="shape"></feBlend>
                </filter>
                <filter
                    id="c"
                    width="56.6667"
                    height="144.007"
                    x="79.6667"
                    y="-8.0035"
                    color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset></feOffset>
                    <feGaussianBlur stdDeviation="4.16667"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow_1_36"></feBlend>
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_36" result="shape"></feBlend>
                </filter>
                <linearGradient
                    id="d"
                    x1="63.9222"
                    x2="63.9222"
                    y1="0.329902"
                    y2="127.67"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="#fff"></stop>
                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                </linearGradient>
            </defs>
        </svg>
    );
}

const packageIcons: Record<PackageType, JSX.Element> = {
    npm: <NpmIcon />,
    pypi: <PythonIcon />,
    crates: <RustIcon />,
    vscode: <VscodeIcon />,
};

function PackageIcon({ type }: { type: PackageType }) {
    return packageIcons[type];
}

export function ProjectsPage() {
    return (
        <main className="space-y-16 pb-8">
            <section className="space-y-4">
                <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                    <span className="h-px w-8 bg-zinc-300 dark:bg-zinc-700" />
                    Projects & packages
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
                    A mix of production tooling, libraries, and experiments.
                </h2>
                <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    Most of my work sits at the intersection of Rust, TypeScript, embedded systems, and developer
                    experience. These are the pieces that made it into open source.
                </p>
            </section>

            <section className="space-y-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                        Published work
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        Production-grade libraries, SDK wrappers, and protocol tooling that I actively maintain.
                    </p>
                </div>

                <ul className="grid gap-6 md:grid-cols-2">
                    {publishedProjects.map(project => {
                        const relatedLinks = project.relatedLinks;
                        const packages = project.packages;
                        const demos = project.demos;

                        const primaryPackage = packages && packages.length > 0 ? packages[0] : undefined;

                        return (
                            <li
                                key={project.name}
                                className="group flex h-full flex-col border border-zinc-200 bg-card/80 px-5 py-4 shadow-[0_0_0_1px_rgba(24,24,27,0.02)] transition-colors hover:border-teal-500/60 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/80 dark:hover:border-teal-400/70 dark:hover:bg-zinc-900"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-1">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 underline decoration-teal-600/30 underline-offset-4 transition-colors group-hover:text-teal-500 group-hover:decoration-teal-500/40 dark:text-teal-400 dark:decoration-teal-400/30 dark:group-hover:text-teal-300 dark:group-hover:decoration-teal-300"
                                        >
                                            <GitHubIcon />
                                            <span>{project.name}</span>
                                            <ExternalLink className="h-3.5 w-3.5" />
                                        </a>
                                        {primaryPackage && (
                                            <p className="text-xs uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                                                {getPackageLabel(primaryPackage.type)} package
                                            </p>
                                        )}
                                    </div>

                                    {packages && packages.length > 1 && (
                                        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
                                            {packages.length} packages
                                        </span>
                                    )}
                                </div>

                                <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                                    {project.description}
                                </p>

                                <div className="mt-4 space-y-3 text-xs">
                                    {packages && packages.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {packages.map(pkg => (
                                                <a
                                                    key={pkg.url}
                                                    href={pkg.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 border border-zinc-200 bg-zinc-50 px-2.5 py-1 font-medium text-zinc-700 transition-colors hover:border-teal-500/60 hover:text-teal-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-teal-400/70 dark:hover:text-teal-300"
                                                >
                                                    <PackageIcon type={pkg.type} />
                                                    <span>{pkg.name}</span>
                                                    <span className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                                                        {getPackageLabel(pkg.type)}
                                                    </span>
                                                </a>
                                            ))}
                                        </div>
                                    )}

                                    {demos && demos.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {demos.map(demo => (
                                                <a
                                                    key={demo.url}
                                                    href={demo.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-700 underline decoration-sky-500/30 underline-offset-4 transition-colors hover:text-sky-600 hover:decoration-sky-500/50 dark:text-sky-300 dark:decoration-sky-300/30 dark:hover:text-sky-200 dark:hover:decoration-sky-200/50"
                                                >
                                                    <ExternalLink className="h-3 w-3" />
                                                    <span>{demo.text}</span>
                                                </a>
                                            ))}
                                        </div>
                                    )}

                                    {relatedLinks && relatedLinks.length > 0 && (
                                        <div className="flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                                            {relatedLinks.map(link => (
                                                <a
                                                    key={link.url}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 underline decoration-zinc-400/30 underline-offset-4 transition-colors hover:text-teal-600 hover:decoration-teal-500/40 dark:hover:text-teal-300 dark:hover:decoration-teal-300/40"
                                                >
                                                    <span>{link.text}</span>
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {project.why && (
                                    <p className="mt-4 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                                        <span className="font-semibold uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">
                                            Why
                                        </span>{" "}
                                        {project.why}
                                    </p>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </section>

            <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
                <div className="space-y-4">
                    <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                            In progress
                        </h3>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">
                            Things I’m actively exploring or tightening up.
                        </p>
                    </div>

                    <ul className="space-y-4">
                        {inProgressProjects.map(project => (
                            <li
                                key={project.name}
                                className="group flex gap-3 border-l border-zinc-200 pl-4 dark:border-zinc-700"
                            >
                                <div className="mt-1 h-2 w-2 flex-shrink-0 bg-amber-500" />
                                <div className="space-y-2">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 underline decoration-teal-600/30 underline-offset-4 transition-colors hover:text-teal-500 hover:decoration-teal-500/40 dark:text-teal-400 dark:decoration-teal-400/30 dark:hover:text-teal-300 dark:hover:decoration-teal-300"
                                        >
                                            <Wrench className="h-3.5 w-3.5" />
                                            <span>{project.name}</span>
                                            <ExternalLink className="h-3 w-3" />
                                        </a>
                                        <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
                                            In progress
                                        </span>
                                    </div>

                                    <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
                                        {project.description}
                                    </p>

                                    {project.why && (
                                        <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                                            <span className="font-semibold uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">
                                                Why
                                            </span>{" "}
                                            {project.why}
                                        </p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
                        Topics on my mind
                    </h3>
                    <ul className="space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                        {interests.map(interest => (
                            <li key={interest} className="flex gap-3">
                                <span className="mt-2 h-px w-6 flex-shrink-0 bg-zinc-300 dark:bg-zinc-700" />
                                <span>{interest}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}
