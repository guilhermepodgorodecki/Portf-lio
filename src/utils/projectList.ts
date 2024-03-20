import projectLoopStudio from '../assets/project-loopstudios.png'
import projectTodoList from '../assets/project-todo-app.png'
import projectAdviceSlip from '../assets/project-advice-slip.png'
import projectDevFinances from '../assets/project-dev-finances.png'
import projectPokedex from '../assets/project-pokedex.png'
import projectMiniPortfolio from '../assets/project-mini-portfolio.png'
import projectGithubApi from '../assets/project-github-api.png'

export type dataType = {
    name: string;
    languages: string[];
    image: string;
    deploy: string;
    repository: string;
}[]

export const data: dataType = [
    {
        name: "Loopstudios Landing Page",
        languages: ["NextJS", "TailWind", "TypeScript"],
        image: projectLoopStudio,
        deploy: "https://loopstudio-r1jq88m7e-pablovianas.vercel.app/",
        repository: "https://github.com/pablovianas/loopstudio-lp",
    },
    {
        name: "Todo List",
        languages: [
            "React",
            "Styled-Components",
            "TypeScript",
            "React-Hot-Toast",
        ],
        image: projectTodoList,
        deploy: "https://todolist-54uzhjgzv-pablovianas.vercel.app/",
        repository: "https://github.com/pablovianas/todolist-ts",
    },
    {
        name: "Advice Generator",
        languages: [
            "React",
            "TypeScript",
            "Styled-Components",
            "Advice Slip API",
        ],
        image: projectAdviceSlip,
        deploy: "https://advice-generator-62gcphasl-pablovianas.vercel.app/",
        repository: "https://github.com/pablovianas/advice-generator-ts",
    },
    {
        name: "Pokedex",
        languages: ["React", "TypeScript", "Styled-Components", "PokeAPI"],
        image: projectPokedex,
        deploy: "https://pokedex-e1j33ukgc-pablovianas.vercel.app/",
        repository: "https://github.com/pablovianas/pokedex-ts",
    },
    {
        name: "Dev  Finances",
        languages: ["React", "Styled-Components", "React-Hot-Toast"],
        image: projectDevFinances,
        deploy: "No deploy",
        repository: "https://github.com/pablovianas/dev-finances",
    },
    {
        name: "Mini Portfolio",
        languages: ["React", "Styled-Components"],
        image: projectMiniPortfolio,
        deploy: "https://mini-portfolio-rggz4kiu0-pablovianas.vercel.app/",
        repository: "https://github.com/pablovianas/mini-portfolio",
    },
    {
        name: "GitHub API",
        languages: ["HTML", "CSS", "JavaScript"],
        image: projectGithubApi,
        deploy: "https://pablovianas.github.io/github-api/",
        repository: "https://github.com/pablovianas/github-api",
    },
];
