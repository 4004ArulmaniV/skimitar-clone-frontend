import {
  Factory,
  Car,
  HeartPulse,
  Laptop,
  Leaf,
  Fuel,
  Truck,
  GraduationCap,
} from "lucide-react";

const industryData = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    description:
      "We deliver advanced industrial automation solutions to improve production efficiency, reduce downtime, and enhance operational performance.",

    solutions: [
      "PLC Programming",
      "SCADA Development",
      "Industrial IoT Integration",
      "Robotics Automation",
      "Machine Monitoring",
    ],

    technologies: [
      "PLC",
      "HMI",
      "SCADA",
      "IIoT",
      "VFD",
      "Sensors",
    ],

    benefits: [
      "Higher Productivity",
      "Reduced Downtime",
      "Real-Time Monitoring",
      "Lower Maintenance Cost",
    ],
  },

  {
    id: "automotive",
    title: "Automotive",
    icon: Car,

    description:
      "Automation solutions for automotive manufacturing and assembly lines.",

    solutions: [
      "Assembly Line Automation",
      "Robot Integration",
      "Quality Inspection",
      "Conveyor Automation",
    ],

    technologies: [
      "PLC",
      "Robotics",
      "Vision Systems",
      "SCADA",
    ],

    benefits: [
      "Improved Quality",
      "Faster Production",
      "Reduced Human Error",
    ],
  },

  {
    id: "healthcare",
    title: "Healthcare",
    icon: HeartPulse,

    description:
      "Smart healthcare automation for hospitals and medical industries.",

    solutions: [
      "Hospital Monitoring",
      "IoT Devices",
      "Data Analytics",
      "Equipment Automation",
    ],

    technologies: [
      "IoT",
      "Cloud",
      "AI",
      "Embedded Systems",
    ],

    benefits: [
      "Better Patient Care",
      "Efficient Operations",
      "Real-Time Monitoring",
    ],
  },

  {
    id: "information-technology",
    title: "Information Technology",
    icon: Laptop,

    description:
      "Custom software development and digital transformation solutions.",

    solutions: [
      "Web Applications",
      "ERP Systems",
      "Cloud Solutions",
      "Software Development",
    ],

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "AWS",
    ],

    benefits: [
      "Scalable Systems",
      "High Performance",
      "Secure Applications",
    ],
  },

  {
    id: "renewable-energy",
    title: "Renewable Energy",
    icon: Leaf,

    description:
      "Automation solutions for solar, wind, and renewable energy plants.",

    solutions: [
      "Solar Monitoring",
      "Wind Farm Automation",
      "Energy Management",
    ],

    technologies: [
      "PLC",
      "SCADA",
      "IoT",
    ],

    benefits: [
      "Energy Optimization",
      "Reduced Cost",
      "Remote Monitoring",
    ],
  },

  {
    id: "oil-gas",
    title: "Oil & Gas",
    icon: Fuel,

    description:
      "Reliable automation systems for upstream and downstream industries.",

    solutions: [
      "Pipeline Monitoring",
      "Safety Systems",
      "Remote Operations",
    ],

    technologies: [
      "PLC",
      "DCS",
      "SCADA",
    ],

    benefits: [
      "Enhanced Safety",
      "Improved Efficiency",
      "Continuous Monitoring",
    ],
  },

  {
    id: "logistics",
    title: "Logistics",
    icon: Truck,

    description:
      "Warehouse and logistics automation for smarter supply chain management.",

    solutions: [
      "Warehouse Automation",
      "Barcode Systems",
      "Inventory Tracking",
    ],

    technologies: [
      "RFID",
      "IoT",
      "Cloud",
    ],

    benefits: [
      "Faster Delivery",
      "Inventory Accuracy",
      "Reduced Manual Work",
    ],
  },

  {
    id: "education",
    title: "Education",
    icon: GraduationCap,

    description:
      "Professional technical training and industrial skill development.",

    solutions: [
      "Industrial Training",
      "Software Courses",
      "Automation Workshops",
    ],

    technologies: [
      "PLC",
      "React",
      "Embedded",
    ],

    benefits: [
      "Hands-on Learning",
      "Industry Exposure",
      "Career Growth",
    ],
  },
];

export default industryData;