export const globalUrl = 'https://andersongomezgarcia.github.io/portfolio/';
//export const globalUrl = 'http://localhost:4321/portfolio/';
const baseUrl = 'img/icons/';

const url = {
    github: baseUrl + 'github.png',
    linkedin: baseUrl + 'linkedin.png',
    bootstrap: baseUrl + 'bootstrap.avif',
    php: baseUrl + 'php.png',
    colombia: baseUrl + 'colombia.png',
    typescript: baseUrl + 'typescript.png',
    javascript: baseUrl + 'js.png',
    html: baseUrl + 'html.png',
    dotnet: baseUrl + 'dotnet.png',
    figma: baseUrl + 'figma.png',
    laravel: baseUrl + 'laravel.png',
    postgresql: baseUrl + 'postgresql.png',
    vscode: baseUrl + 'vscode.png',
    css: baseUrl + 'css.png',
    react: baseUrl + 'react.png',
    vite: baseUrl + 'vite.png',
    tailwind: baseUrl + 'tailwind.png',
    git: baseUrl + 'git.png',
    nodejs: baseUrl + 'nodejs.png',
    express: baseUrl + 'express.png',
    xampp: baseUrl + 'xampp.png',
    astro: baseUrl + 'astro.png',
}

export default function getUrl(key: string) {
    if (key in url) {
        return url[key as keyof typeof url];
    } else {
        throw new Error(`URL for key "${key}" not found.`);
    }
}