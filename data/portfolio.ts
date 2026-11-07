export type Project = {
  number: string; title: string; category: string; description: string;
  tags: string[]; url: string; visualLabel: string;
};
export type Service = { number: string; title: string; description: string };

export const projects: Project[] = [
  { number:"01", title:"RepoLens", category:"AI / DEVELOPER TOOL",
    description:"Understand any GitHub repository. Turn unfamiliar codebases into architecture diagrams, documentation and AI-powered insights.",
    tags:["Next.js","TypeScript","GitHub API"], url:"https://github.com/shaikyasirahmed07",
    visualLabel:"REPOSITORY INTELLIGENCE" },
  { number:"02", title:"DakshKrishi", category:"FULL-STACK / AGRITECH",
    description:"A crop recommendation platform connecting a modern React experience with a Spring Boot and PostgreSQL backend.",
    tags:["React","Spring Boot","PostgreSQL"], url:"https://github.com/shaikyasirahmed07/DakshKrishi_frontend",
    visualLabel:"SMARTER CROP DECISIONS" },
  { number:"03", title:"Water Billing DApp", category:"BLOCKCHAIN / WEB3",
    description:"A decentralised water billing experience built around transparent smart-contract workflows and a clean web interface.",
    tags:["Solidity","React","Ethers.js"], url:"https://github.com/shaikyasirahmed07",
    visualLabel:"DECENTRALISED BILLING" },
];
export const technologies = ["REACT","NEXT.JS","JAVASCRIPT","TYPESCRIPT","NODE.JS","PYTHON","JAVA","POSTGRESQL","MONGODB","SOLIDITY","GIT / GITHUB","TAILWIND CSS"];
export const services: Service[] = [
  {number:"01",title:"Frontend development",description:"Responsive interfaces, reusable components and considered interactions."},
  {number:"02",title:"Full-stack applications",description:"End-to-end product development, APIs and database-backed experiences."},
  {number:"03",title:"Developer-focused tools",description:"Useful software that makes technical workflows easier to understand."},
];
export const navigationItems = ["Home","About","Work","Services","Contact"];
