const courses = [
  {
    id: "plc-programming",
    title: "PLC Programming",
    category: "Industrial Automation",
    duration: "45 Days",
    mode: ["Online", "Offline"],
    eligibility: "Diploma / BE / B.Tech / Working Professionals",
    tools: [
      "Siemens PLC",
      "Delta PLC",
      "Mitsubishi PLC",
      "Allen Bradley PLC",
    ],
    certificate: true,
    placement: true,
    projects: true,
    description:
      "Learn industrial PLC programming, ladder logic, machine automation, troubleshooting, and real-time industrial applications."
  },

  {
    id: "scada",
    title: "SCADA",
    category: "Industrial Automation",
    duration: "30 Days",
    mode: ["Online", "Offline"],
    eligibility: "Diploma / Engineering Students",
    tools: [
      "WinCC",
      "Ignition",
      "FactoryTalk",
      "Wonderware"
    ],
    certificate: true,
    placement: true,
    projects: true,
    description:
      "Develop real-time monitoring systems, alarms, trends, reports, and industrial visualization dashboards."
  },

  {
    id: "hmi",
    title: "HMI Design",
    category: "Industrial Automation",
    duration: "25 Days",
    mode: ["Online", "Offline"],
    eligibility: "Diploma / Engineering Students",
    tools: [
      "Siemens HMI",
      "Delta HMI",
      "Weintek",
      "Kinco"
    ],
    certificate: true,
    placement: true,
    projects: true,
    description:
      "Design operator interfaces for industrial machines with alarms, recipes, trends, and production monitoring."
  },

  {
    id: "vfd",
    title: "VFD Programming",
    category: "Industrial Automation",
    duration: "20 Days",
    mode: ["Online", "Offline"],
    eligibility: "Electrical & Electronics Students",
    tools: [
      "Siemens VFD",
      "Delta VFD",
      "ABB",
      "Schneider"
    ],
    certificate: true,
    placement: true,
    projects: true,
    description:
      "Learn motor speed control, drive configuration, commissioning, and industrial troubleshooting."
  },

  {
    id: "industrial-automation",
    title: "Industrial Automation",
    category: "Automation",
    duration: "60 Days",
    mode: ["Online", "Offline"],
    eligibility: "Engineering Students & Professionals",
    tools: [
      "PLC",
      "SCADA",
      "HMI",
      "VFD"
    ],
    certificate: true,
    placement: true,
    projects: true,
    description:
      "Complete industrial automation program covering PLC, SCADA, HMI, VFD, sensors, and control systems."
  },

  {
    id: "embedded-systems",
    title: "Embedded Systems",
    category: "Embedded",
    duration: "45 Days",
    mode: ["Online", "Offline"],
    eligibility: "ECE / EEE / CSE Students",
    tools: [
      "Arduino",
      "Raspberry Pi",
      "8051",
      "Embedded C"
    ],
    certificate: true,
    placement: true,
    projects: true,
    description:
      "Build embedded hardware and firmware projects using microcontrollers, sensors, and communication modules."
  },

  {
    id: "iot",
    title: "Internet of Things (IoT)",
    category: "Emerging Technology",
    duration: "40 Days",
    mode: ["Online", "Offline"],
    eligibility: "Students & Professionals",
    tools: [
      "ESP32",
      "NodeMCU",
      "MQTT",
      "Cloud Platforms"
    ],
    certificate: true,
    placement: true,
    projects: true,
    description:
      "Learn connected devices, cloud integration, sensors, remote monitoring, and smart automation solutions."
  },

  {
    id: "cctv",
    title: "CCTV Installation",
    category: "Security Systems",
    duration: "15 Days",
    mode: ["Offline"],
    eligibility: "Anyone Interested",
    tools: [
      "IP Camera",
      "DVR",
      "NVR",
      "Networking"
    ],
    certificate: true,
    placement: false,
    projects: true,
    description:
      "Hands-on training in CCTV installation, surveillance systems, networking, and maintenance."
  },

  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "Marketing",
    duration: "45 Days",
    mode: ["Online", "Offline"],
    eligibility: "Students, Business Owners & Professionals",
    tools: [
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Google Analytics"
    ],
    certificate: true,
    placement: true,
    projects: true,
    description:
      "Master SEO, paid advertising, content marketing, social media, analytics, and campaign optimization."
  },

  {
    id: "python",
    title: "Python Programming",
    category: "Programming",
    duration: "45 Days",
    mode: ["Online", "Offline"],
    eligibility: "Beginners",
    tools: [
      "Python",
      "VS Code",
      "Git"
    ],
    certificate: true,
    placement: true,
    projects: true,
    description:
      "Learn Python fundamentals, OOP, file handling, APIs, and project development from scratch."
  },

  {
    id: "web-development",
    title: "Web Development",
    category: "Software Development",
    duration: "60 Days",
    mode: ["Online", "Offline"],
    eligibility: "Beginners",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "React"
    ],
    certificate: true,
    placement: true,
    projects: true,
    description:
      "Build responsive websites and modern frontend applications using current web technologies."
  },

  {
    id: "full-stack-development",
    title: "Full Stack Development",
    category: "Software Development",
    duration: "90 Days",
    mode: ["Online", "Offline"],
    eligibility: "Students & Freshers",
    tools: [
      "React",
      "Node.js",
      "Express",
      "MongoDB"
    ],
    certificate: true,
    placement: true,
    projects: true,
    description:
      "Learn frontend and backend development by building complete full-stack applications with the MERN stack."
  }
];

export default courses;