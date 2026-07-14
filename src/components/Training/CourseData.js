import plc from "../../assets/courses/plc.jpg";
import scada from "../../assets/courses/scada.jpg";
import hmi from "../../assets/courses/hmi.jpg";
import iiot from "../../assets/courses/iiot.jpg";
import embedded from "../../assets/courses/embedded.jpg";
import web from "../../assets/courses/web-development.jpg";
import marketing from "../../assets/courses/digital-marketing.jpg";

const commonHighlights = [
  "Hands-on Practical Training",
  "Real-Time Industrial Projects",
  "Industry Expert Trainers",
  "Certificate on Completion",
  "Placement Assistance",
  "Interview Preparation",
];

const courses = [
  {
    id: 1,
    title: "PLC Programming",
    description:
      "Learn PLC programming from basics to industrial automation projects.",
    overview:
      "This course introduces PLC programming, ladder logic, timers, counters, sensors, actuators, and industrial automation concepts through practical training and real-time projects.",

    duration: "6 Weeks",
    level: "Beginner",
    mode: "Offline",
    language: "English",
    certificate: "Yes",
    seats: "30",
    lastUpdated: "July 2026",

    image: plc,

    highlights: commonHighlights,

    syllabus: [
      "Introduction to PLC",
      "PLC Hardware",
      "Ladder Logic Programming",
      "Timers & Counters",
      "Input / Output Modules",
      "Industrial Mini Project",
    ],

    prerequisites: [
      "Basic Electrical Knowledge",
      "No Programming Experience Required",
    ],

    outcomes: [
      "Develop PLC Programs",
      "Understand Industrial Automation",
      "Troubleshoot PLC Systems",
      "Build Real-Time Automation Projects",
    ],
  },

  {
    id: 2,
    title: "SCADA Systems",
    description:
      "Design and monitor industrial systems using modern SCADA software.",
    overview:
      "Learn SCADA architecture, HMI development, alarms, trends, industrial communication, and real-time monitoring using industry-standard software.",

    duration: "8 Weeks",
    level: "Intermediate",
    mode: "Offline",
    language: "English",
    certificate: "Yes",
    seats: "25",
    lastUpdated: "July 2026",

    image: scada,

    highlights: commonHighlights,

    syllabus: [
      "Introduction to SCADA",
      "HMI Screens",
      "Tag Configuration",
      "Alarm Management",
      "Trend Analysis",
      "Industrial Communication",
    ],

    prerequisites: [
      "Basic PLC Knowledge",
      "Computer Fundamentals",
    ],

    outcomes: [
      "Design SCADA Screens",
      "Monitor Industrial Processes",
      "Configure Alarms & Trends",
      "Connect PLC with SCADA",
    ],
  },

  {
    id: 3,
    title: "HMI Design",
    description:
      "Create professional Human Machine Interface applications.",
    overview:
      "Learn to build attractive HMI dashboards for industrial automation with animations, alarms, navigation, and data visualization.",

    duration: "4 Weeks",
    level: "Intermediate",
    mode: "Offline",
    language: "English",
    certificate: "Yes",
    seats: "20",
    lastUpdated: "July 2026",

    image: hmi,

    highlights: commonHighlights,

    syllabus: [
      "Introduction to HMI",
      "Screen Design",
      "Animations",
      "Navigation",
      "Alarm Screens",
      "Live Industrial Project",
    ],

    prerequisites: [
      "Basic PLC Knowledge",
    ],

    outcomes: [
      "Design Professional HMIs",
      "Improve Operator Experience",
      "Connect HMI with PLC",
    ],
  },

  {
    id: 4,
    title: "Industrial IoT",
    description:
      "Connect machines with cloud technologies and Industrial IoT solutions.",
    overview:
      "Understand Industrial IoT architecture, cloud connectivity, MQTT, sensors, dashboards, and predictive monitoring.",

    duration: "8 Weeks",
    level: "Advanced",
    mode: "Hybrid",
    language: "English",
    certificate: "Yes",
    seats: "20",
    lastUpdated: "July 2026",

    image: iiot,

    highlights: commonHighlights,

    syllabus: [
      "IoT Fundamentals",
      "Sensors",
      "Cloud Integration",
      "MQTT Protocol",
      "Dashboard Development",
      "Industrial Case Study",
    ],

    prerequisites: [
      "Basic Networking",
      "Automation Knowledge",
    ],

    outcomes: [
      "Develop IoT Applications",
      "Cloud-Based Monitoring",
      "Industrial Data Analytics",
    ],
  },

  {
    id: 5,
    title: "Embedded Systems",
    description:
      "Build embedded applications using microcontrollers and sensors.",
    overview:
      "Learn embedded C programming, Arduino, microcontrollers, sensors, actuators, and embedded project development.",

    duration: "10 Weeks",
    level: "Advanced",
    mode: "Offline",
    language: "English",
    certificate: "Yes",
    seats: "20",
    lastUpdated: "July 2026",

    image: embedded,

    highlights: commonHighlights,

    syllabus: [
      "Embedded C",
      "Microcontrollers",
      "Arduino",
      "Sensors",
      "Interfacing",
      "Mini Project",
    ],

    prerequisites: [
      "Basic Programming Knowledge",
    ],

    outcomes: [
      "Develop Embedded Applications",
      "Interface Sensors",
      "Build Embedded Projects",
    ],
  },

  {
    id: 6,
    title: "Web Development",
    description:
      "Complete MERN Stack development with real-world projects.",
    overview:
      "Master HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, authentication, APIs, and deployment through full-stack projects.",

    duration: "12 Weeks",
    level: "Beginner",
    mode: "Online",
    language: "English",
    certificate: "Yes",
    seats: "40",
    lastUpdated: "July 2026",

    image: web,

    highlights: commonHighlights,

    syllabus: [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Authentication",
      "Deployment",
    ],

    prerequisites: [
      "Basic Computer Knowledge",
    ],

    outcomes: [
      "Build MERN Applications",
      "Develop REST APIs",
      "Deploy Full Stack Projects",
    ],
  },

  {
    id: 7,
    title: "Digital Marketing",
    description:
      "SEO, Social Media Marketing and Google Ads for businesses.",
    overview:
      "Learn SEO, Google Ads, Meta Ads, social media strategies, email marketing, analytics, and branding techniques.",

    duration: "5 Weeks",
    level: "Beginner",
    mode: "Online",
    language: "English",
    certificate: "Yes",
    seats: "35",
    lastUpdated: "July 2026",

    image: marketing,

    highlights: commonHighlights,

    syllabus: [
      "SEO",
      "Google Ads",
      "Social Media Marketing",
      "Email Marketing",
      "Analytics",
      "Campaign Management",
    ],

    prerequisites: [
      "Basic Internet Knowledge",
    ],

    outcomes: [
      "Run Marketing Campaigns",
      "Improve Website Ranking",
      "Generate Leads",
    ],
  },
];

export default courses;