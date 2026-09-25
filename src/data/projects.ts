export type Project = {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    features: string[];
    image?: string;
    github?: string;
    demo?: string;
};

export const projects: Project[] = [
    {
        id: 1,
        title: "Gestion de rendez-vous municipaux",

        description:
            "Application full-stack permettant aux citoyens de consulter les services municipaux, de réserver des créneaux et de gérer leurs rendez-vous.",

        technologies: [
            "React",
            "Node.js",
            "Express",
            "MySQL",
            "JWT",
            "Sequelize",
            "Bootstrap",
        ],
        features: [
            "Authentification sécurisée",
            "Gestion des utilisateurs",
            "Gestion des rôles",
            "Réservation de rendez-vous",
            "Gestion des créneaux",
            "Envoi d'emails de confirmation",
        ],
        image: "/projects/accueil_gestion-rdv-municipaux.png",
        github: "https://github.com/Hadilou1998/Gestion-des-rdv-municipaux_React",
        demo: "https://gestion-des-rdv-municipaux-react.vercel.app/",
    },

    {
        id: 2,
        title: "Plateforme de gestion EuroDisney",

        description:
            "Application full-stack permettant de gérer les attractions, les tickets, les réservations et les employés du parc.",
        
        technologies: [
            "React",
            "TypeScript",
            "Vite",
            "Python",
            "FastAPI",
            "SQLAlchemy",
            "MySQL",
            "JWT",
        ],

        features: [
            "Authentification sécurisée",
            "Gestion des rôles",
            "Gestion des attractions",
            "Gestion des tickets",
            "Gestion des réservations",
            "Gestion des employés",
        ],
        image: "/projects/accueil_api-eurodisney.png",
        github: "https://github.com/Hadilou1998/API-React-Python-EuroDisney",
        demo: "https://api-react-python-euro-disney.vercel.app/",
    },
]