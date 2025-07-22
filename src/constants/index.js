import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  sabudh,
  ingrade,
  edunet,
  digitmg,
  mysql,
  powerbi,
  threejs,
  microsoft,
  qrgenerator,
  spotify,
  shoppingtrends,
  nqueen,
  snakegame,
  simongame,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Data Analytics & ML Enthusiast",
    icon: figma,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer (React.js)",
    icon: reactjs,
  },
  {
    title: "AI Learner & Researcher",
    icon: creator,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  { name: "MySQL",
    icon: mysql,
  }, 
  { name: "Power BI",
     icon: powerbi, 
  },
  { name: "Python",
     icon: redux 
  },
];

const experiences = [
  {
    title: "AI Transformative Learning Intern",
    company_name: "TeckSaksham (SAP + Microsoft)",
    icon: microsoft,
    iconBg: "#E6DEDD",
    date: "June 2023 - Aug 2023",
    points: [
      "Gained hands-on experience in Artificial Intelligence tools and practices.",
      "Contributed to AI-based learning materials and research projects.",
    ],
  },
  {
    title: "Data Analytics Intern",
    company_name: "360digitMG",
    icon: digitmg,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Performed data collection and exploratory data analysis (EDA).",
      "Built predictive models using Python and scikit-learn.",
    ],
  },
  {
    title: "Cybersecurity Intern",
    company_name: "IBM SkillsBuild(edunet foundation)",
    icon: edunet,
    iconBg: "#E6DEDD",
    date: "March 2023 - April 2023",
    points: [
      "Learned vulnerability scanning and encryption techniques.",
      "Gained hands-on understanding of incident response protocols.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Ingrade",
    icon: ingrade,
    iconBg: "#383E56",
    date: "Jan 2023 - Mar 2023",
    points: [
      "Worked on analytics projects involving data cleaning and visualization.",
      "Developed and trained machine learning models for real-world data.",
    ],
  },
  {
    title: "Data Science Intern (Ongoing)",
    company_name: "Sabudh Foundation",
    icon: sabudh,
    iconBg: "#E6DEDD",
    date: "June 2024 - Present",
    points: [
      "Currently working on social impact-based data science projects.",
      "Contributing to analytics-driven decision making.",
    ],
  },
];
const projects = [
//   {
//   name: "Full-stack trading platform",
//   description:
//     "A full-stack trading platform simulation inspired by Zerodha, featuring real-time user registration, portfolio tracking, and backend trade logic using MERN stack. Fully deployed and production-ready.",
//   tags: [
//     { name: "react", color: "blue-text-gradient" },
//     { name: "nodejs", color: "green-text-gradient" },
//     { name: "mongodb", color: "pink-text-gradient" },
//     { name: "express", color: "orange-text-gradient" },
//   ],
//   image: "", 
//   source_code_link: "https://github.com/yourusername/zerodha-clone",
// },
{
  name: "N-Queens Visualizer",
  description: "An interactive visualization of the N-Queens problem using HTML, CSS, and JavaScript. Helps in understanding backtracking algorithms through visual feedback.",
  tags: [
    { name: "html", color: "blue-text-gradient" },
    { name: "css", color: "green-text-gradient" },
    { name: "javascript", color: "yellow-text-gradient" },
  ],
  image: nqueen,
  source_code_link: "https://github.com/Manviya-Sahni/N_Queens_visualiser", 
},
{
    name: "Shopping Trends Analysis",
    description: "Performed data visualization and trend analysis on customer shopping data using Python, Power BI, and Excel.",
    tags: [
      { name: "powerbi", color: "blue-text-gradient" },
      { name: "excel", color: "green-text-gradient" },
      { name: "python", color: "pink-text-gradient" },
    ],
    image: shoppingtrends, 
    source_code_link: "https://github.com/Manviya-Sahni/Identifying-shopping-trends-using-data-analytics.git",
  },
  {
    name: "Spotify Clone",
    description: "A frontend clone of Spotify built using HTML, CSS, Bootstrap, and Tailwind CSS to enhance UI/UX design skills.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image:spotify, 
    source_code_link: "https://github.com/Manviya-Sahni/Spotify_clone.git",
  },
  {
    name: "Simon Game",
description: "A memory-based game built with HTML, CSS, and JavaScript. Users repeat an increasingly long sequence of colors and sounds.",
tags: [
  { name: "javascript", color: "blue-text-gradient" },
  { name: "html", color: "green-text-gradient" },
  { name: "css", color: "pink-text-gradient" },
],
image: simongame,
source_code_link: "https://github.com/Manviya-Sahni/Simon_Game.git",
  },
  {
    name: "Snake Game",
description: "Classic snake game built using HTML, CSS, and JavaScript. The snake grows as it eats food and the game ends on collision.",
tags: [
  { name: "javascript", color: "blue-text-gradient" },
  { name: "html", color: "green-text-gradient" },
  { name: "css", color: "pink-text-gradient" },
],
image: snakegame,
source_code_link: "https://github.com/Manviya-Sahni/Snake_Game.git",
  },
  {
    name: "QR Code Generator",
    description: "Simple app that generates QR codes for user input text or URLs using JavaScript.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "html", color: "green-text-gradient" },
      { name: "qr", color: "pink-text-gradient" },
    ],
    image:qrgenerator,
    source_code_link: "https://github.com/Manviya-Sahni/Qr_code_generator.git",
  },
];


export { services, technologies, experiences, projects };
