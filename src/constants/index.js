import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Data Analyst with a strong focus on delivering data-driven insights to support business decisions. With 2.5 years of hands-on experience, I have developed expertise in Machine Learning, Python, MySQL, Excel, Power BI, Oracle Analytics Cloud (OAC), and data integrations. I am dedicated to harnessing the power of data to uncover trends, solve complex problems, and optimize performance.`;

export const ABOUT_TEXT = `I am a detail-oriented Data Analyst with 2.5 years of experience in data analysis, machine learning, and data visualization. I specialize in Python, MySQL, Excel, Power BI, and Oracle Analytics Cloud (OAC). My passion for analytics drives me to uncover patterns and deliver actionable insights from diverse data sources. I thrive in collaborative environments, solving complex problems to make data more accessible and impactful. Outside of work, I enjoy exploring AI advancements and staying updated with the latest industry tools.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Machine Learning Engineer",
    company: "Aspire Systems",
    description: `Development and deployment of machine learning models using Oracle Machine Learning . Collaborated with cross-functional teams to preprocess data and integrate models into applications, ensuring efficient data retrieval from Oracle ADW databases.`,
    technologies: ["Python", "Oracle Machine Learning", "SQL", "OAC(Analytics)",],
  },
  {
    year: "2022 - 2023",
    role: "Data Analyst",
    company: "Aspire Systems",
    description: `Conducted data analysis and visualization using Excel, OAC, and Incorta to derive actionable insights and support business decisions. Collaborated with stakeholders to define key metrics and reporting requirements, ensuring accurate and timely data delivery across the organization.`,
    technologies: ["Excel", "SQL", "OAC", "Incorta","ODI"],
  },
 
];

export const PROJECTS = [
  {
    title: "Brand Sale Prediction",
    image: project4,
    description:
      "forecast the future sale rate of various brands",
    technologies: ["Python", "SQL", "OML", "OAC", "Oracle DB"],
  },
  {
    title: "Employee Attrition Prediction,Sentiment Analysis,Recomendation Systems",
    image: project2,
    description:
      "Forecast the likelihood of employee attrition/Identify customer buying patterns using classification techniques",
      technologies: ["Python", "SQL", "OML", "OAC", "Oracle DB"],
  },
  {
    title: "Icon BI Reporting",
    image: project3,
    description:
      "Analyze customer demand data to create informative dashboards.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },

];

export const CONTACT = {
  address: "Alappuzha,Kerala,India ",
  phoneNo: "+91 7902786272 ",
  email: "athulplaiju08@gmail.com",
};
