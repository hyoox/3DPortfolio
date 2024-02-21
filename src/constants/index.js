import { prisma } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    python,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    csharp
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },

    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
];

export const experiences = [
    {
        title: "Software Engineer",
        company_name: "Prisma Electronics S.A.",
        icon: prisma,
        iconBg: "#accbe1",
        date: "February 2020 - Present",
        points: [
            "Led a dynamic team of software engineers in the development of Laros@Web, an advanced vessel monitoring and data analytics system, e2-energy, an industrial monitoring and data analytics platform and IoT solutions for Smart Cities.",

            "Oversaw the end-to-end software development lifecycle, from requirements analysis to deployment, ensuring the successful delivery of high-quality products.",

            "Spearheaded the design and architecture of Laros, e2-energy, and Smart Cities projects, aligning technical strategies with business goals."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/hyoox',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/nikolaos-skliris-40b3b219b/',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Notes Application',
        description: 'Developed a notes application using Next.js, enabling users to create, edit, and delete notes.',
        link: 'https://github.com/hyoox/NotesNextJsApplication',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-red',
        name: 'Covid-19 Tracker',
        description: 'Developed a Covid-19 Tracker during the pandemic, using React, Material-UI, and Chart.js to visualize the spread of the virus.',
        link: 'https://github.com/hyoox/Covid-19-Tracker',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Weather Reporting System',
        description: 'Design and developed a Weather Report System in Python using OpenWeatherMap API and Self-signed SSL Certificate along with Authentication.',
        link: 'https://github.com/hyoox/weatherReportingSystem',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Netflix Clone Application',
        description: 'Developed as a final project for PeopleCerts Bootcamp (2019-2020), a Netflix clone application.',
        link: 'https://github.com/hyoox/MovieXFrontPage',
    },
];