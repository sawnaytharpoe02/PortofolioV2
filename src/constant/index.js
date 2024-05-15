const languages = [
  "HTML",
  "CSS",
  "VANILLA JAVASCRIPT",
  "SASS/SCSS",
  "TYPESCRIPT",
];

const frameworks = [
  "React.js",
  "Next.js",
  "Redux/Redux Toolkit",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "Prisma",
  "MongoDB",
  "Nest.js",
  "Bootstrap",
  "Tailwind CSS",
  "Material UI",
  "Ant Design",
  "Git",
  "Postman",
];

const projects = [
  {
    id: 1,
    title: "Bookmark Landing",
    development: "Fullstack",
    src: "one.jpg",
    color: "#000000",
  },

  {
    id: 2,
    title: "Invoice Maker",
    development: "Backend",
    src: "two.png",
    color: "#8C8C8C",
  },

  {
    id: 3,
    title: "Boostrap Admin Dashboard",
    development: "Frontend",
    src: "three.png",
    color: "#EFE8D3",
  },

  {
    id: 4, 
    title: "Clash Of Clans",
    development: "Design & Frontend",
    src: "two.png",
    color: "#706D63",
  },

  {
    id: 5,
    title: "Foodie",
    development: "Fullstack",
    src: "one.jpg",
    color: "#000000",
  },

  {
    id: 6,
    title: "Loop Studios",
    development: "Backend",
    src: "two.png",
    color: "#8C8C8C",
  },

  {
    id: 7,
    title: "SnapLanding",
    development: "Frontend",
    src: "three.png",
    color: "#EFE8D3",
  },

  {
    id: 8,
    title: "Music App UI",
    development: "Design & Frontend",
    src: "two.png",
    color: "#706D63",
  },
];

const featuredProjects = [
  {
    title: "Taskito",
    src: "/one.jpg",
    repo: "https://github.com/sawnaytharpoe02/TaskMng_ReactNode",
    description:
      "Taskito is a fullstack app streamlines project & task management for teams. Users (created by admins) can create and manage projects, assign tasks with real-time alerts, and leverage search, filtering, and export features for tasks and reports.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Ant Design",
      "Cloudinary",
      "Socket.io",
    ],
  },
  {
    title: "Forklore",
    src: "/two.png",
    repo: "https://github.com/sawnaytharpoe02/rest-pos",
    description:
      "Forklore is a food ordering app for restaurants. Customers scan a QR for user-friendly menus (we handle setup!) and making informed choices. Admin can control menus, categories, addons and more. It's delicious efficiency!",
    tech: [
      "Next.js",
      "Typescript",
      "Redux Toolkit",
      "Material UI",
      "Prisma",
      "PostgreSQL",
      "S3 Storage",
    ],
  },
];

export { languages, frameworks, projects, featuredProjects };
