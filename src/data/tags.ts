import { Tag } from '../models/tag';

export const TAGS: Tag[] = [
    // Languages
    { id: 1, name: "JavaScript", slug: "javascript", category: "Languages", color: "#f0db4f" },
    { id: 2, name: "TypeScript", slug: "typescript", category: "Languages", color: "#007acc" },
    { id: 3, name: "C#", slug: "csharp", category: "Languages", color: "#68217a" },
    { id: 4, name: "SQL", slug: "sql", category: "Languages", color: "#003B57" },
    { id: 5, name: "SASS/SCSS", slug: "sassscss", category: "Languages", color: "#cc6699" },
    // Libraries and Developmental Frameworks
    { id: 7, name: "jQuery", slug: "jquery", category: "Libraries and Developmental Frameworks", color: "#0769AD" },
    { id: 8, name: "Angular", slug: "angular", category: "Libraries and Developmental Frameworks", color: "#dd1b16" },
    { id: 9, name: "React", slug: "react", category: "Libraries and Developmental Frameworks", color: "#61DAFB" },

    { id: 11, name: "Node.js", slug: "nodejs", category: "Libraries and Developmental Frameworks", color: "#68a063" },
    { id: 12, name: "Express.js", slug: "expressjs", category: "Libraries and Developmental Frameworks", color: "#000000" },
    { id: 13, name: "Vite.js", slug: "vitejs", category: "Libraries and Developmental Frameworks", color: "#646CFF" },

    { id: 16, name: "ASP.NET Core", slug: "aspnetcore", category: "Libraries and Developmental Frameworks", color: "#512bd4" },
    // Databases
    { id: 17, name: "MongoDB", slug: "mongodb", category: "Databases", color: "#4DB33D" },
    { id: 18, name: "MySQL", slug: "mysql", category: "Databases", color: "#00758f" },
    { id: 19, name: "SQLite", slug: "sqlite", category: "Databases", color: "#003B57" },
    // Cloud Services
    { id: 20, name: "Azure", slug: "azure", category: "Cloud Services", color: "#0089D6" },
    { id: 21, name: "AWS", slug: "aws", category: "Cloud Services", color: "#F7931E" },
];
