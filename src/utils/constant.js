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
    title: "Booky Landy",
    development: "Frontend",
    href: "https://bookylandy.netlify.app",
    stacks: ["Html", "Scss", "Boostrap"],
    year: "2022",
  },
  {
    id: 2,
    title: "Cycle Studio",
    development: "Frontend",
    href: "https://cyclestudio.netlify.app",
    stacks: ["Html", "Scss", "Gsap"],
    year: "2022",
  },
  {
    id: 3,
    title: "SnapLand",
    development: "Frontend",
    href: "https://snapland.netlify.app",
    stacks: ["Html", "Boostrap"],
    year: "2022",
  },
  {
    id: 4,
    title: "Foodie Mody",
    development: "Frontend",
    href: "https://foodie-mody.netlify.app",
    stacks: ["Html", "Bootstrap", "Javascript", "Vite"],
    year: "2022",
  },
  {
    id: 5,
    title: "BeeGarden",
    development: "Frontend",
    href: "https://beegarden.netlify.app",
    stacks: ["html", "Scss", "Javascript", "Gsap", "Vite"],
    year: "2022",
  },
  {
    id: 6,
    title: "Fortress Clash",
    development: "Design",
    href: "https://fortress-clash.netlify.app",
    stacks: ["Html", "Css", "Swiper"],
    year: "2022",
  },
  {
    id: 7,
    title: "Premium Dashboard",
    development: "Frontend",
    href: "https://bootboard.vercel.app",
    stacks: ["Vite", "Bootstrap", "Javascript", "Apexchart", "JsVectorMap"],
    year: "2022",
  },
  {
    id: 8,
    title: "Music Tracker",
    development: "Design",
    href: "https://music-track.netlify.app",
    stacks: ["Html", "Css", "Javascript"],
    year: "2022",
  },
  {
    id: 9,
    title: "Todo List",
    development: "Frontend",
    href: "https://to-todo.vercel.app",
    stacks: ["React", "Css"],
    year: "2023",
  },
  // {
  //   id: 9,
  //   title: "Duralumin Blog",
  //   development: "Frontend",
  //   href: "https://duralumin-blog.vercel.app",
  //   stacks: ["Html", "Css", "Vite"],
  //   year: "2023",
  // },
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
