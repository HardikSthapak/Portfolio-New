// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Hardik Sthapak",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "Hi there! My name is Hardik Sthapak, and I'm currently pursuing my fourth year of Computer Science and Engineering at VIT Vellore. I have a strong passion for web development, particularly in the MERN stack.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "REACT",
    // svg: '',
    faClass: "fab fa-react",
  },
  {
    name: "PHP",
    // svg: '',
    faClass: "fab fa-php",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "My Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Task 1",
    skills: ["ReactJs"],
    url: "https://react-tasks-flame.vercel.app/task1",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Task 2",
    skills: ["ReactJs"],
    url: "https://react-tasks-flame.vercel.app/task2",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Task 3",
    skills: ["ReactJs"],
    url: "https://react-tasks-flame.vercel.app/task3",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Task 4",
    skills: ["ReactJs"],
    url: "https://react-tasks-flame.vercel.app/task4",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Task 5",
    skills: ["ReactJs"],
    url: "https://react-tasks-flame.vercel.app/task5",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Some of my other projects";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "HTML Tasks",
    url: "https://hardiksthapak.github.io/HTML/",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Bootstrap Tasks",
    url: "https://hardiksthapak.github.io/Bootstrap/",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "JavaScript Tasks",
    url: "https://hardiksthapak.github.io/JavaScript/",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "If you'd like to know more about me or discuss any projects or opportunities, feel free to scroll down or reach out to me.",
  copyright: "Hardik Sthapak",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/",
  facebook: "https://www.facebook.com/",
  // twitter: "https://twitter.com",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/in/",
  resume: "https://novoresume.com/",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
