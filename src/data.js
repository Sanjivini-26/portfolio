export const personal = {
  name: "Sanjivini Antil",
  firstName: "Sanjivini",
  lastName: "Antil",
  titles: ["Data Science Student", "ML Engineer", "Data Analyst"],
  email: "shanuantil188@gmail.com",
  phone: "+91-7330757614",
  github: "https://github.com/Sanjivini-26",
  leetcode: "#",
  linkedin: "https://www.linkedin.com/in/sanjivini-antil-9abaa4297/",
  cgpa: "7.3",
  college: "Lovely Professional University",
  photo: new URL('./assets/image.png', import.meta.url).href,
  bio: "Passionate Data Science student with expertise in machine learning, data analysis, and building data-driven solutions. I love uncovering insights from complex datasets through clean code and smart models.",
  bio2: "Currently pursuing B.Tech in Computer Science at Lovely Professional University, working on impactful projects in ML, data analysis, and full-stack development.",
}

export const skills = [
  { name: "C++",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",     category: "Languages" },
  { name: "JavaScript",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",  category: "Languages" },
  { name: "Python",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",           category: "Languages" },
  { name: "Java",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",               category: "Languages" },
  { name: "C",            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",                     category: "Languages" },
  { name: "HTML",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",             category: "Languages" },
  { name: "CSS",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",               category: "Languages" },
  { name: "Node.js",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",           category: "Frameworks" },
  { name: "React",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",             category: "Frameworks" },
  { name: "MySQL",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",             category: "Tools & Platforms" },
  { name: "Jupyter",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",         category: "Tools & Platforms" },
  { name: "NumPy",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",             category: "Tools & Platforms" },
  { name: "Pandas",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",           category: "Tools & Platforms" },
  { name: "Power BI",     icon: "https://img.icons8.com/color/48/power-bi.png",                                            category: "Tools & Platforms" },
  { name: "MS Excel",     icon: "https://img.icons8.com/color/48/microsoft-excel-2019.png",                                category: "Tools & Platforms" },
  { name: "TensorFlow",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",   category: "Tools & Platforms" },
  { name: "Figma",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",             category: "Tools & Platforms" },
  { name: "Git",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",                 category: "Tools & Platforms" },
]

export const softSkills = [
  "Problem-Solving", "Team Player", "Adaptability",
]

export const projects = [
  {
    title: "Global Wellbeing Through Economic & Energy Trends",
    desc: "Analyzed global socio-economic indicators to uncover development patterns, comparing income groups, GDP, life expectancy, and internet access across 150+ countries. Built ML classification models using Python achieving ~85% accuracy in predicting country income categories.",
    tags: ["Python", "Pandas", "NumPy", "Seaborn", "Scikit-learn"],
    category: "Data Science / ML",
    date: "April 2025",
    github: "https://github.com/Sanjivini-26",
    live: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    title: "AI-Powered Fitness Planner – Personalized Workout",
    desc: "Built an AI fitness assistant that generates customized workout and diet plans based on BMI, goals, and activity level, targeting a 25–40% improvement in workout consistency. Validated with 20 users where 78% reported improved guidance.",
    tags: ["Python", "TensorFlow", "OpenCV", "Scikit-learn", "Flask", "HTML", "CSS"],
    category: "AI / Full Stack",
    date: "March 2025",
    github: "https://github.com/Sanjivini-26",
    live: "#",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
  },
  {
    title: "Loan Disbursement & Socio-Economic Impact Analysis",
    desc: "Created an interactive Excel dashboard to analyze loan distribution trends across sectors and demographics. Used Pivot Tables, Slicers, Charts and Dashboards for data modeling across 50+ districts with correlation strength of 0.72.",
    tags: ["MS Excel", "Power BI", "Data Analysis", "Dashboard"],
    category: "Data Analytics",
    date: "February 2025",
    github: "https://github.com/Sanjivini-26",
    live: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
]

export const education = [
  {
    period: "Since August 2023",
    institution: "Lovely Professional University",
    degree: "B.Tech Computer Science & Engineering · Punjab, India",
    grade: "CGPA 7.3",
  },
  {
    period: "April 2022 – March 2023",
    institution: "Kendriya Vidalaya No.3 AFS Makarpura",
    degree: "Intermediate · Vadodara",
    grade: "84%",
  },
  {
    period: "April 2020 – March 2021",
    institution: "Kendriya Vidalaya AFS Begumpet",
    degree: "Matriculation · Hyderabad",
    grade: "89%",
  },
]

export const certifications = [
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "2025",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
    link: "https://www.coursera.org/account/accomplishments/certificate/K4PZVZ6DAJGK",
  },
  {
    title: "Fundamentals of Network Communication",
    issuer: "Coursera",
    date: "2025",
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80",
    link: "https://www.coursera.org/account/accomplishments/certificate/IIP4VE3CEGIP",
  },
  {
    title: "Cloud Computing",
    issuer: "Google Drive",
    date: "2025",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
    link: "https://drive.google.com/file/d/1WSAKb4_DaJC8FOoLqyy1nQ-cNAqk9qrc/view",
  },
]

export const training = [
  {
    org: "Lovely Professional University",
    title: "UI/UX Designer",
    period: "June 2025 – August 2025",
    points: [
      "Designed a student productivity app to improve study planning and time management by 30–40% using structured scheduling and reminders.",
      "Built high-fidelity UI screens in Figma, improving navigation clarity by 25% based on user feedback.",
      "Validated with 18 testers, where 82% reported increased focus and better task tracking through habit-tracking and progress visuals.",
    ],
    tags: ["Figma", "UI/UX", "Prototyping", "User Research"],
    link: "https://drive.google.com/file/d/1wegU5GLMfTNYhnfLEMTvSbvRFxe-u4EG/view?usp=drive_link",
    icon: null,
  },
]

export const achievements = [
  {
    category: "Sports",
    icon: "🏀",
    title: "2nd Position – National Level Basketball Tournament",
    desc: "Secured 2nd position at the national level basketball tournament, demonstrating teamwork, leadership, and competitive excellence.",
    date: null,
    link: null,
    linkLabel: null,
  },
  {
    category: "Academic",
    icon: "🥉",
    title: "3rd Rank – Mathematics Olympiad",
    desc: "Secured 3rd rank in a Mathematics Olympiad, showcasing strong analytical and problem-solving skills.",
    date: null,
    link: null,
    linkLabel: null,
  },
]

export const stats = [
  { label: "Projects", value: "3+" },
  { label: "Certifications", value: "3+" },
]

export const techTags = ["React", "Python", "TensorFlow", "Figma", "MySQL", "Node.js"]
