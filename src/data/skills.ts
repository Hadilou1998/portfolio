export type SkillCategory = {
    title: string;
    skills: string[];
};

export const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        skills: [
            "HTML", 
            "CSS", 
            "JavaScript",
            "TypeScript",
            "Bootstrap",
            "React",
            "Vite",
            "Angular"
        ],
    },
    {
        title: "Backend",
        skills: [
            "Node.js",
            "Express",
            "API REST",
            "JWT",
            "PHP",
            "Symfony",
            "Laravel",
            "Java",
            "Spring Boot",
            "Python",
            "FastAPI"
        ],
    },
    {
        title: "Base de données",
        skills: [
            "MySQL",
            "MariaDB",
            "SQLite",
            "MongoDB",
            "SQL",
            "Sequelize",
            "TypeORM",
            "SQLAlchemy"
        ],
    },
    {
        title: "Outils",
        skills: [
            "Git",
            "GitHub",
            "Docker",
            "Postman",
            "VS Code",
            "Linux"
        ],
    },
];